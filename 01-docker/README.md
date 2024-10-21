# Docker

## Introduction
### What is Docker?
Docker is an application that builds, shares and runs containers.

Containers are an isolated piece of software, allowing applications to function as distinct and separate entities.

### Why do we use Docker?
Containerization is useful as they can work on any environment, and are isolated.

### Workshop Outline
The aim is to equip you with the skills to containerise an application using docker.

1. Installing Docker
2. Dockerfile Basics
3. Containerising a simple Flask server
4. Running the Dockerfile
5. Docker Compose
6. Volumes
7. Multiple Containers

## Workshop
### Installing Docker
Follow [this guide](https://docs.docker.com/get-started/get-docker/). You should know that it is fully installed when you can run `docker` commands.

### Dockerfile Basics
A dockerfile is used to configure the container's filesystem. You will need to make sure all of the program files are copied to the container, along with installing the necessary packages.

### Containerising a simple Flask server
Reference the dockerfile in 01-docker/example/client/Dockerfile.

### Running the Dockerfile
First, build the docker image:
`docker build -t <your-tag> .`

Then, run the docker image. You can map your device ports using the -p flag:
`docker run <your-tag> -p <your_port>:<container_port>`

### Docker Compose
To run the docker compose file, enter the command:
`docker compose up --build`

### Volumes
Volumes map files from your device to the container, meaning that you can change the content on your device and changes will register in the container.

These are particularly useful for persistent storage and hot-reloading.

### Multiple Containers
Simply specify as more services in the docker compose file.

### Sharing Containers
Container images can be shared on public or private container registries. We have previously used container images from a registry when we use a base image in our Dockerfiles. You can share your own on [Docker Hub](https://hub.docker.com/).