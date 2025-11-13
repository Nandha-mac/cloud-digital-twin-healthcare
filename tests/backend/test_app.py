from fastapi.testclient import TestClient
from src.backend.app import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Cloud-based Digital Twin Generator for Healthcare Prediction using Generative AI"}
