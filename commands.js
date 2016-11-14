mongoimport --db mean-dev --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --drop --jsonArray --file new_users.json



mongoexport --jsonArray --db mean-dev --collection properties  --out new_properties.json

mongoexport --jsonArray --db mean-dev --collection users  --out new_users.json