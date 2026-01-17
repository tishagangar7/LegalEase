#simplifier.py
import google.generativeai as genai
import os
from dotenv import load_dotenv
import json

load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel("models/gemini-2.5-flash")


def simplify_legal_text(legal_text: str, reading_level: str = "5th grade") -> dict:
    """
    Simplify legal text using Gemini AI
    """
    
    # Limit text to avoid token limits
    text_to_process = legal_text[:4000]
    
    prompt = f"""You are an expert legal translator. Convert this legal document into plain, accessible English.

ORIGINAL TEXT:
{text_to_process}

INSTRUCTIONS:
1. **Rewrite at {reading_level} level** - use short sentences and common words
2. **Preserve accuracy** - don't change the legal meaning
3. **Explain jargon** - put simple definitions in parentheses
4. **Use active voice** - "We will..." instead of "It shall be..."
5. **Use second person** - "you" instead of "the user/party"
6. **Break it down** - organize with clear sections if needed

EXAMPLE TRANSFORMATION:
❌ "The party of the first part hereby agrees to indemnify and hold harmless the party of the second part..."
✅ "You agree to protect us from legal claims and pay for any damages..."

SIMPLIFIED VERSION:"""

    try:
        response = model.generate_content(prompt)
        simplified_text = response.text
        
        return {
            "simplified_text": simplified_text,
            "original_length": len(legal_text),
            "simplified_length": len(simplified_text),
            "model": "gemini-pro"
        }
    
    except Exception as e:
        raise Exception(f"Simplification failed: {str(e)}")

def identify_red_flags(legal_text: str) -> list:
    """
    Identify concerning clauses in legal documents
    """
    
    text_to_process = legal_text[:4000]
    
    prompt = f"""Analyze this legal document and identify any RED FLAGS or concerning clauses.

DOCUMENT:
{text_to_process}

Look for:
- Forced arbitration clauses
- Class action waivers
- Unusual liability limitations
- Hidden fees or charges
- Automatic renewals
- Rights you're giving up
- One-sided terms heavily favoring one party
- Unclear or vague language that could be exploited

Return ONLY a JSON array of red flags. Each item should have:
- "clause": the specific problematic text (short quote, max 100 chars)
- "concern": what's wrong with it (simple explanation, max 200 chars)
- "severity": "High", "Medium", or "Low"

If there are no major red flags, return an empty array: []

IMPORTANT: Return ONLY valid JSON, nothing else. No markdown, no explanations, just the JSON array.

JSON:"""

    try:
        response = model.generate_content(prompt)
        response_text = response.text.strip()
        
        # Clean up response (remove markdown code blocks if present)
        if response_text.startswith('```'):
            response_text = response_text.split('```')[1]
            if response_text.startswith('json'):
                response_text = response_text[4:]
        
        response_text = response_text.strip()
        
        # Parse JSON
        red_flags = json.loads(response_text)
        
        # Validate structure
        if not isinstance(red_flags, list):
            return []
        
        # Ensure each flag has required fields
        validated_flags = []
        for flag in red_flags:
            if isinstance(flag, dict) and 'clause' in flag and 'concern' in flag and 'severity' in flag:
                validated_flags.append(flag)
        
        return validated_flags
        
    except Exception as e:
        print(f"Red flag detection failed: {e}")
        return []

def generate_summary(legal_text: str) -> str:
    """
    Generate a brief summary of what the document is about
    """
    
    text_to_process = legal_text[:2000]
    
    prompt = f"""Summarize this legal document in 2-3 simple sentences. What is it? What does it do?

DOCUMENT:
{text_to_process}

SUMMARY (2-3 sentences, plain English):"""

    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return "This appears to be a legal document. Unable to generate summary at this time."

def explain_legal_term(highlighted_text: str, context: str = "") -> str:
    """
    Provide detailed explanation of highlighted legal text
    """
    
    prompt = f"""You are a legal expert explaining complex terms to regular people.

HIGHLIGHTED TEXT:
"{highlighted_text}"

SURROUNDING CONTEXT:
{context[:500] if context else "No additional context provided"}

YOUR TASK:
Explain this highlighted text in simple, everyday language. Include:

1. **What it means** - Plain English definition
2. **Why it matters** - Practical implications for you
3. **Real example** - A concrete scenario if helpful
4. **Watch out for** - Any red flags or concerns

Keep it concise (4-6 sentences) but informative.
Use a friendly, conversational tone.
Be helpful and clear.

EXPLANATION:"""

    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return "Sorry, I couldn't generate an explanation for this text. Please try again or ask about different text."