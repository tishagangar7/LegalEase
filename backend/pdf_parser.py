#pdf_parser.py
import PyPDF2
import pdfplumber
from docx import Document
import io

def extract_text_from_pdf(file_bytes: bytes) -> str:
    """
    Extract text from PDF using multiple methods for reliability
    """
    text = ""
    
    try:
        # Try pdfplumber first (better for complex layouts)
        with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"
    except Exception as e:
        print(f"pdfplumber failed: {e}")
        
        # Fallback to PyPDF2
        try:
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(file_bytes))
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n\n"
        except Exception as e2:
            print(f"PyPDF2 also failed: {e2}")
            raise Exception("Could not extract text from PDF")
    
    return text.strip()

def extract_text_from_docx(file_bytes: bytes) -> str:
    """
    Extract text from Word document
    """
    doc = Document(io.BytesIO(file_bytes))
    text = "\n\n".join([paragraph.text for paragraph in doc.paragraphs])
    return text.strip()

def extract_text_from_file(file_bytes: bytes, filename: str) -> str:
    """
    Route to appropriate extractor based on file type
    """
    filename_lower = filename.lower()
    
    if filename_lower.endswith('.pdf'):
        return extract_text_from_pdf(file_bytes)
    elif filename_lower.endswith(('.docx', '.doc')):
        return extract_text_from_docx(file_bytes)
    elif filename_lower.endswith('.txt'):
        return file_bytes.decode('utf-8')
    else:
        raise ValueError(f"Unsupported file type: {filename}")