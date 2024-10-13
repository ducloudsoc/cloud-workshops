# Docker

## Introduction
### What is Docker?

### Why do we use Docker?

### Workshop Outline
The aim is to equip you with the skills to containerise an application using docker.

1. Installing Docker
2. Dockerfile Basics
3. Containerising a simple Flask server
4. Running the Dockerfile
5. Docker Compose
6. Volumes
7. Multiple Containers
8. Container Registries
9. Full Deployment

## Workshop
### Installing Docker
Follow [this guide](https://docs.docker.com/get-started/get-docker/). You should know that it is fully installed when you can run `docker` commands.

### Dockerfile Basics

### Containerising a simple Flask server

### Running the Dockerfile
First, build the docker image:
`docker build -t <your-tag> .`

Then, run the docker image. You can map your device ports using the -p flag:
`docker run <your-tag> [-p 5000:5000]`

### Docker Compose