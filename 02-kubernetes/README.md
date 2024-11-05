# Kubernetes

## Introduction
### What is Kubernetes?
Kubernetes is used to deploy containers as part of a cluster.

### Why do we use Kubernetes?
It automates cluster deployment and management.

### Workshop Outline
The aim is to equip you with the skills to deploy to a Kubernetes cluster.

1. Installing Kubernetes
2. Setting up kubectl
3. Deploying an nginx pod
4. Deploying an nginx deployment
5. Deploying a service
6. Deploying a dockerized application
7. Further Concepts

## Workshop
### Installing Kubernetes
Follow [this guide](https://kubernetes.io/docs/tasks/tools/#kubectl) to install `kubectl` on your machine.

### Setting up kubectl
We now need to create the kubectl config to connect to the cluster.

Create the folder ~/.kube, then create a file called config inside it.

The contents of the config file will be distributed via an encrypted messaging platorm, which we will share during the workshop.

Finally, connect to the Pi Cluster network. The password will also be distributed during the workshop.

### Deploying an nginx pod
Work through [this guide](https://kubernetes.io/docs/concepts/workloads/pods/#using-pods) to create an nginx pod.

Once you have created the file, run `kubectl apply -f nginx-pod.yml`

### Deploying an nginx deployment
Work through [this guide](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#creating-a-deployment) to create an nginx deployment.

Once again, run `kubectl apply -f nginx-deployment.yml`

### Deploying a service
Work through [this guide](https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service), making sure to specify the type as NodePort. Check the example for reference.

### Deploying a dockerized application
Build the docker image of the server: `docker build --platform linux/arm64 -t demo-flask ./server`\
Tag the image with IP of the cluster: `docker tag demo-flask:latest 192.168.1.233:30007/demo-flask:latest`\
Push the image to the cluster registry: `docker push 192.168.1.233:30007/demo-flask:latest`

You can then reference the image in your container specification: `image: localhost:30007/demo-flask:latest`

### Further Concepts
Have fun experimenting with and learning some further concepts, like Volumes and Horizontal Pod Autoscaling.
