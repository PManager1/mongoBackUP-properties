
# ADD 
mongoimport --db mean-dev --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --jsonArray --file new_users.json


# ADD and DROP
mongoimport --db mean-dev --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --drop --jsonArray --file new_users.json


# LOCAL - MAC

mongoexport --jsonArray --db mean-dev --collection properties  --out new_properties.json

mongoexport --jsonArray --db mean-dev --collection users  --out new_users.json