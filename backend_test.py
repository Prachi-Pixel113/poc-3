#!/usr/bin/env python3
"""
Backend API Testing Suite for Aptitude Test Platform
Tests all backend endpoints and verifies functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get the backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not find REACT_APP_BACKEND_URL in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"🔗 Testing backend at: {API_BASE_URL}")

class BackendTester:
    def __init__(self):
        self.passed_tests = 0
        self.failed_tests = 0
        self.test_results = []
        
    def log_test(self, test_name, passed, message=""):
        status = "✅ PASS" if passed else "❌ FAIL"
        result = f"{status}: {test_name}"
        if message:
            result += f" - {message}"
        print(result)
        self.test_results.append(result)
        
        if passed:
            self.passed_tests += 1
        else:
            self.failed_tests += 1
    
    def test_server_health(self):
        """Test if the server is responding"""
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Server Health Check", True, "Server responding correctly")
                    return True
                else:
                    self.log_test("Server Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Server Health Check", False, f"HTTP {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("Server Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test GET /status (should return empty list initially)
        try:
            response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /status endpoint", True, f"Returned {len(data)} status checks")
                else:
                    self.log_test("GET /status endpoint", False, "Response is not a list")
                    return False
            else:
                self.log_test("GET /status endpoint", False, f"HTTP {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("GET /status endpoint", False, f"Connection error: {str(e)}")
            return False
        
        # Test POST /status
        try:
            test_data = {"client_name": "test_client_backend_testing"}
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=test_data, 
                                   timeout=10,
                                   headers={"Content-Type": "application/json"})
            
            if response.status_code == 200:
                data = response.json()
                if data.get("client_name") == test_data["client_name"] and "id" in data and "timestamp" in data:
                    self.log_test("POST /status endpoint", True, "Status check created successfully")
                    
                    # Verify the data was actually stored by getting all status checks
                    get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
                    if get_response.status_code == 200:
                        all_status = get_response.json()
                        found = any(s.get("client_name") == test_data["client_name"] for s in all_status)
                        if found:
                            self.log_test("Data Persistence Check", True, "Status check persisted in database")
                        else:
                            self.log_test("Data Persistence Check", False, "Status check not found in database")
                    return True
                else:
                    self.log_test("POST /status endpoint", False, f"Invalid response structure: {data}")
                    return False
            else:
                self.log_test("POST /status endpoint", False, f"HTTP {response.status_code}: {response.text}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("POST /status endpoint", False, f"Connection error: {str(e)}")
            return False
    
    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = requests.options(f"{API_BASE_URL}/", timeout=10)
            headers = response.headers
            
            cors_headers = [
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Headers'
            ]
            
            missing_headers = [h for h in cors_headers if h not in headers]
            if not missing_headers:
                self.log_test("CORS Configuration", True, "All CORS headers present")
                return True
            else:
                self.log_test("CORS Configuration", False, f"Missing headers: {missing_headers}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"Connection error: {str(e)}")
            return False
    
    def test_question_endpoints(self):
        """Test for question-related endpoints (expected for aptitude platform)"""
        question_endpoints = [
            "/questions",
            "/questions/quantitative",
            "/questions/logical", 
            "/questions/verbal",
            "/categories",
            "/subtopics"
        ]
        
        missing_endpoints = []
        for endpoint in question_endpoints:
            try:
                response = requests.get(f"{API_BASE_URL}{endpoint}", timeout=5)
                if response.status_code == 404:
                    missing_endpoints.append(endpoint)
            except:
                missing_endpoints.append(endpoint)
        
        if missing_endpoints:
            self.log_test("Question Endpoints Check", False, 
                         f"Missing expected endpoints for aptitude platform: {missing_endpoints}")
            return False
        else:
            self.log_test("Question Endpoints Check", True, "All expected question endpoints found")
            return True
    
    def test_error_handling(self):
        """Test error handling"""
        # Test invalid endpoint
        try:
            response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
            if response.status_code == 404:
                self.log_test("404 Error Handling", True, "Returns 404 for invalid endpoints")
            else:
                self.log_test("404 Error Handling", False, f"Expected 404, got {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("404 Error Handling", False, f"Connection error: {str(e)}")
        
        # Test invalid POST data
        try:
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json={"invalid": "data"}, 
                                   timeout=10,
                                   headers={"Content-Type": "application/json"})
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_test("Input Validation", True, f"Properly validates input (HTTP {response.status_code})")
            else:
                self.log_test("Input Validation", False, f"Expected 400/422, got {response.status_code}")
        except requests.exceptions.RequestException as e:
            self.log_test("Input Validation", False, f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Tests...")
        print("=" * 50)
        
        # Core functionality tests
        self.test_server_health()
        self.test_status_endpoints()
        self.test_cors_headers()
        self.test_error_handling()
        
        # Aptitude platform specific tests
        self.test_question_endpoints()
        
        print("=" * 50)
        print(f"📊 Test Results: {self.passed_tests} passed, {self.failed_tests} failed")
        
        if self.failed_tests == 0:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. See details above.")
            return False

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Print summary for easy parsing
    print("\n" + "=" * 50)
    print("SUMMARY:")
    for result in tester.test_results:
        print(result)
    
    sys.exit(0 if success else 1)