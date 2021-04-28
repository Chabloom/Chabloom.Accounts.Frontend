timestamp=`date +%s`
docker build -t 10.1.1.11:32000/chabloom-accounts-frontend:$timestamp -t 10.1.1.11:32000/chabloom-accounts-frontend:latest .
docker push 10.1.1.11:32000/chabloom-accounts-frontend:$timestamp
docker push 10.1.1.11:32000/chabloom-accounts-frontend:latest
