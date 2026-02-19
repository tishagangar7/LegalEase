#main.py

import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from pdf_parser import extract_text_from_file
from simplifier import (
    simplify_legal_text, 
    identify_red_flags, 
    generate_summary,
    explain_legal_term
)

load_dotenv()


def get_allowed_origins() -> list[str]:
    """
    Read a comma-separated origin allow-list from env.
    Falls back to local frontend URLs for development.
    """
    raw_origins = os.getenv("FRONTEND_ORIGINS", "")
    parsed_origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
    if parsed_origins:
        return parsed_origins
    return [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

app = FastAPI(title="LegalEase API", version="1.0")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "name": "LegalEase API",
        "version": "1.0",
        "status": "running",
        "endpoints": ["/health", "/analyze", "/analyze-text", "/explain"]
    }

@app.get("/health")
def health_check():
    return {"status": "healthy", "version": "1.0"}

@app.get("/reading-levels")
def get_reading_levels():
    return {
        "levels": [
            "5th grade",
            "8th grade",
            "High school",
            "College"
        ]
    }

# File upload endpoint
@app.post("/analyze")
async def analyze_document(
    file: UploadFile = File(...),
    reading_level: str = "5th grade"
):
    """
    Main endpoint: Upload legal document, get simplified version
    """
    try:
        # Read file
        file_bytes = await file.read()
        
        # Extract text
        original_text = extract_text_from_file(file_bytes, file.filename)
        
        if len(original_text) < 100:
            raise HTTPException(
                status_code=400, 
                detail="Document seems too short or unreadable"
            )
        
        # Generate summary
        summary = generate_summary(original_text)
        
        # Simplify
        simplification_result = simplify_legal_text(original_text, reading_level)
        
        # Identify red flags
        red_flags = identify_red_flags(original_text)
        
        return {
            "success": True,
            "summary": summary,
            "original_text": original_text,
            "simplified_text": simplification_result["simplified_text"],
            "original_length": len(original_text),
            "simplified_length": len(simplification_result["simplified_text"]),
            "red_flags": red_flags,
            "reading_level": reading_level
        }
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Text analysis endpoint (no file upload)
class TextAnalysisRequest(BaseModel):
    text: str
    reading_level: str = "5th grade"

@app.post("/analyze-text")
async def analyze_text(request: TextAnalysisRequest):
    """
    Analyze pasted text (no file upload needed)
    """
    try:
        print(f"DEBUG: Request received")
        print(f"DEBUG: Text length: {len(request.text)}")
        print(f"DEBUG: Reading level: {request.reading_level}")
        
        original_text = request.text
        reading_level = request.reading_level
        
        if len(original_text) < 100:
            print(f"DEBUG: Text too short ({len(original_text)} chars)")
            raise HTTPException(
                status_code=400, 
                detail="Text is too short (minimum 100 characters)"
            )
        
        # Generate summary
        print("DEBUG: Calling generate_summary...")
        summary = generate_summary(original_text)
        print(f"DEBUG: Summary: {summary[:50]}...")
        
        # Simplify
        print("DEBUG: Calling simplify_legal_text...")
        simplification_result = simplify_legal_text(original_text, reading_level)
        print(f"DEBUG: Simplification complete")
        
        # Identify red flags
        print("DEBUG: Calling identify_red_flags...")
        red_flags = identify_red_flags(original_text)
        print(f"DEBUG: Found {len(red_flags)} red flags")
        
        result = {
            "success": True,
            "summary": summary,
            "original_text": original_text,
            "simplified_text": simplification_result["simplified_text"],
            "original_length": len(original_text),
            "simplified_length": len(simplification_result["simplified_text"]),
            "red_flags": red_flags,
            "reading_level": reading_level
        }
        
        print("DEBUG: Returning result")
        return result
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"ERROR in analyze_text: {str(e)}")
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
# Explain specific text endpoint
class ExplainRequest(BaseModel):
    text: str
    context: str = ""

@app.post("/explain")
async def explain_text(request: ExplainRequest):
    """
    Provide detailed explanation for highlighted text
    """
    try:
        highlighted_text = request.text
        context = request.context
        
        if len(highlighted_text) < 5:
            raise HTTPException(
                status_code=400, 
                detail="Text too short to explain"
            )
        
        explanation = explain_legal_term(highlighted_text, context)
        
        return {
            "success": True,
            "highlighted_text": highlighted_text,
            "explanation": explanation
        }
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)