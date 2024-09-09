# Use the official Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the container
COPY . .

# Expose port 5000
EXPOSE 5000

# Set the entrypoint command to run the Flask application
CMD python -m flask --app hello_world run