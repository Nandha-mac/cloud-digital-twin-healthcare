from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Cloud-based Digital Twin Generator for Healthcare Prediction using Generative AI"}
