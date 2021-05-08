timestamp=`date +%s`
docker build -t mdcasey/chabloom-accounts-frontend:$timestamp -t mdcasey/chabloom-accounts-frontend:latest .
docker push mdcasey/chabloom-accounts-frontend:$timestamp
docker push mdcasey/chabloom-accounts-frontend:latest
