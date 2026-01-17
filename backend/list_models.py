"""
List all available Gemini models for your API key
"""

import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=api_key)

print("=" * 60)
print("Available Gemini Models for Your API Key")
print("=" * 60)

try:
    models = genai.list_models()
    
    generate_content_models = []
    
    for model in models:
        print(f"\n📦 {model.name}")
        print(f"   Display Name: {model.display_name}")
        print(f"   Supported Methods: {', '.join(model.supported_generation_methods)}")
        
        if 'generateContent' in model.supported_generation_methods:
            generate_content_models.append(model.name)
    
    print("\n" + "=" * 60)
    print("Models that support generateContent (use these!):")
    print("=" * 60)
    
    if generate_content_models:
        for model_name in generate_content_models:
            print(f"✅ {model_name}")
        
        print("\n" + "=" * 60)
        print("RECOMMENDATION:")
        print("=" * 60)
        print(f"Use this in your simplifier.py:")
        print(f'model = genai.GenerativeModel("{generate_content_models[0]}")')
    else:
        print("❌ No models support generateContent with this API key")
        print("\nYou may need to:")
        print("1. Create a new API key at https://makersuite.google.com/app/apikey")
        print("2. Or switch to a different AI provider (Claude, OpenAI)")
        
except Exception as e:
    print(f"❌ Error listing models: {e}")