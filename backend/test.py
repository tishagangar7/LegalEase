"""
Test the LegalEase API endpoints
Run this AFTER starting the server with: uvicorn main:app --reload
"""

import requests
import json

BASE_URL = "http://127.0.0.1:8000"

def test_health_check():
    """Test if server is running"""
    print("=" * 60)
    print("TEST 1: Health Check")
    print("=" * 60)
    
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"✅ Status: {response.status_code}")
        print(f"Response: {response.json()}")
        return True
    except Exception as e:
        print(f"❌ Failed: {e}")
        print("Make sure the server is running with: uvicorn main:app --reload")
        return False

def test_analyze_text():
    """Test text analysis endpoint"""
    print("\n" + "=" * 60)
    print("TEST 2: Analyze Text (Main Endpoint)")
    print("=" * 60)
    
    data = {
        "text": "This Agreement shall automatically renew unless terminated by either party with thirty (30) days written notice. The Company shall not be liable for any damages arising from the use of this service.",
        "reading_level": "5th grade"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/analyze-text", json=data)
        
        if response.status_code != 200:
            print(f"❌ Status: {response.status_code}")
            print(f"Error: {response.text}")
            return False
            
        result = response.json()
        
        print(f"✅ Status: {response.status_code}")
        print(f"\n📄 SUMMARY:")
        print(result['summary'])
        print(f"\n✏️  SIMPLIFIED TEXT:")
        print(result['simplified_text'])
        print(f"\n📊 STATS:")
        print(f"  Original: {result['original_length']} chars")
        print(f"  Simplified: {result['simplified_length']} chars")
        print(f"\n🚩 RED FLAGS: {len(result['red_flags'])} found")
        
        for i, flag in enumerate(result['red_flags'], 1):
            print(f"  {i}. [{flag['severity']}] {flag['clause'][:50]}...")
            print(f"      → {flag['concern']}")
        
        return True
    except Exception as e:
        print(f"❌ Failed: {e}")
        import traceback
        traceback.print_exc()
        return False

def test_explain():
    """Test term explanation"""
    print("\n" + "=" * 60)
    print("TEST 3: Explain Legal Term")
    print("=" * 60)
    
    data = {
        "text": "indemnify and hold harmless",
        "context": "The party agrees to indemnify and hold harmless the Company from any claims"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/explain", json=data)
        
        if response.status_code != 200:
            print(f"❌ Status: {response.status_code}")
            print(f"Error: {response.text}")
            return False
            
        result = response.json()
        
        print(f"✅ Status: {response.status_code}")
        print(f"\nExplanation:\n{result['explanation']}")
        return True
    except Exception as e:
        print(f"❌ Failed: {e}")
        return False

def test_reading_levels():
    """Test reading levels endpoint"""
    print("\n" + "=" * 60)
    print("TEST 4: Get Reading Levels")
    print("=" * 60)
    
    try:
        response = requests.get(f"{BASE_URL}/reading-levels")
        result = response.json()
        
        print(f"✅ Status: {response.status_code}")
        print(f"Available levels: {', '.join(result['levels'])}")
        return True
    except Exception as e:
        print(f"❌ Failed: {e}")
        return False

if __name__ == "__main__":
    print("🧪 Testing LegalEase API\n")
    print("⚠️  Make sure the server is running first!")
    print("   Terminal 1: cd backend && uvicorn main:app --reload")
    print("   Terminal 2: cd backend && python test.py\n")
    
    results = []
    results.append(test_health_check())
    
    if results[0]:  # Only continue if server is running
        results.append(test_analyze_text())
        results.append(test_explain())
        results.append(test_reading_levels())
    
    print("\n" + "=" * 60)
    print("FINAL RESULTS")
    print("=" * 60)
    passed = sum(results)
    total = len(results)
    print(f"Passed: {passed}/{total} tests")
    
    if passed == total:
        print("🎉 All tests passed! Your API is working!")
    else:
        print("⚠️  Some tests failed. Check errors above.")