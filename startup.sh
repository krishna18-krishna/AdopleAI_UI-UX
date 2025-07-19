#!/bin/bash
echo ":rocket: Starting FastAPI backend..."
# Set working directory to Backend/
cd Backend || {
    echo ":x: Backend folder not found!"
    exit 1
}
# Install backend dependencies
echo ":package: Installing backend dependencies..."
pip install -r requirements.txt
# Run the FastAPI app using Gunicorn + UvicornWorker
echo ":cog: Running FastAPI app with Gunicorn..."
exec gunicorn app:app \
    --workers 1 \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind=0.0.0.0:8000 \
    --timeout 600
