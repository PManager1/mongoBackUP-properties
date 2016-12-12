
# ADD and DROP  | PROD
mongoimport --db mean --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --drop --jsonArray --file new_users.json


# ADD  ONLY   | PROD
mongoimport --db mean --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --jsonArray --file new_users.json





# ADD  ONLY   | DEV
mongoimport --db mean-dev --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --jsonArray --file new_users.json




# ADD and DROP  | DEV 
mongoimport --db mean-dev --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --drop --jsonArray --file new_users.json




#  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT 


# PROD 

mongoexport --jsonArray --db mean --collection properties  --out export/export-12-12-3.json



# LOCAL - MAC

mongoexport --jsonArray --db mean-dev --collection properties  --out new_properties.json
mongoexport --jsonArray --db mean-dev --collection users  --out new_users.json

mongoexport --jsonArray --db mean-dev --collection articles  --out export-articles.json

# LOCAL IMPORT 

mongoimport --db mean-dev --collection properties --drop --jsonArray --file export-properties.json

mongoexport --jsonArray --db mean-dev --collection properties  --out export-properties.json

























