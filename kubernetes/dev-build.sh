docker build -t chabloom-accounts-frontend:1.0.0 .
docker save chabloom-accounts-frontend > chabloom-accounts-frontend.tar
microk8s ctr image import chabloom-accounts-frontend.tar
rm chabloom-accounts-frontend.tar
