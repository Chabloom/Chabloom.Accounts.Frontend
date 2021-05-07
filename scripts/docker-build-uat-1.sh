timestamp=`date +%s`
docker build -t chb-uat-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp -t chb-uat-1.chabloom.com:32000/chabloom-accounts-frontend:latest .
docker push chb-uat-1.chabloom.com:32000/chabloom-accounts-frontend:$timestamp
docker push chb-uat-1.chabloom.com:32000/chabloom-accounts-frontend:latest
