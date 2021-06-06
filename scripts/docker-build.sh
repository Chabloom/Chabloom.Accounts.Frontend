#!/bin/bash

docker buildx create --name chabloom --platform linux/amd64,linux/arm64 --use

timestamp=`date +%s`
docker buildx build -t mdcasey/chabloom-accounts-frontend:$timestamp -t mdcasey/chabloom-accounts-frontend:latest --push --platform linux/amd64,linux/arm64 .
