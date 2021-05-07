timestamp=`date +%s`
docker build -t chb-prod-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp -t chb-prod-1.chabloom.com:32000/chabloom-accounts-frontend:latest .
docker push chb-prod-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp
docker push chb-prod-1.chabloom.com:32000/chabloom-accounts-frontend:latest
