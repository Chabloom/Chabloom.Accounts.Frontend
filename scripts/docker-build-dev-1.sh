timestamp=`date +%s`
docker build -t chb-dev-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp -t chb-dev-1.chabloom.com:32000/chabloom-accounts-frontend:latest .
docker push chb-dev-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp
docker push chb-dev-1.chabloom.com:32000/chabloom-accounts-frontend:latest
