# ADD  ONLY   | PROD

mongoimport --db mean --collection properties --jsonArray --file 

mongoimport --db mean --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --jsonArray --file new_users.json




# ADD and DROP  | PROD
mongoimport --db mean --collection properties --drop --jsonArray --file 
mongoimport --db mean --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean --collection users --drop --jsonArray --file new_users.json







# ADD  ONLY   | DEV
mongoimport --db mean-dev --collection properties --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --jsonArray --file new_users.json






# ADD and DROP  | DEV 
mongoimport --db mean-dev --collection properties --drop --jsonArray --file 

mongoimport --db mean-dev --collection properties --drop --jsonArray --file /home/ubuntu/MongoBackUP-properties/new_properties.json
mongoimport --db mean-dev --collection users --drop --jsonArray --file new_users.json




#  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT #  EXPORT 
# PROD 

mongoexport --jsonArray --db mean --collection properties  --out export/export-1-12-3.json



# LOCAL - MAC
mongoexport --jsonArray --db mean-dev --collection properties  --out new_properties.json
mongoexport --jsonArray --db mean-dev --collection users  --out new_users.json

mongoexport --jsonArray --db mean-dev --collection articles  --out export-articles.json

# LOCAL IMPORT 

mongoimport --db mean-dev --collection properties --drop --jsonArray --file export-properties.json
mongoexport --jsonArray --db mean-dev --collection properties  --out export-properties.json



https://goo.gl/0BNPCz
git add-commit -m 'My commit message'




sub .zshrc 
sudo vim .bash_profile
=====


alias ladd='mongoimport --db mean-dev --collection properties --jsonArray --file '
alias laddd='mongoimport --db mean-dev --collection properties --drop --jsonArray --file '

alias sadd='mongoimport --db mean --collection properties --jsonArray --file '
alias saddd='mongoimport --db mean --collection properties --drop --jsonArray --file '


alias lex='mongoexport --jsonArray --db mean-dev --collection properties  --out '
alias sex='mongoexport --jsonArray --db mean --collection properties  --out '

mongoexport --jsonArray --db mean-dev --collection users  --out 

Mongo search :
http://stackoverflow.com/questions/10610131/checking-if-a-field-contains-a-string

db.properties.findOne({"comments" : {$regex : ".*homo.*"}});
db.properties.findOne({"agent_name" : {$regex : ".*Noam.*"}});


db.properties.findOne({"_id" : {$regex : "588bdce69045439fdf1bb304"}});



db.properties.findOne({"address" : {$regex : ".* 244 *"}});


db.properties.findOne({"Left_VM_P" : {$regex : ".*true.*"}});

db.properties.findOne({"Left_VM_P" : true});

db.properties.findOne({"_id" : {$regex : "588bdce69045439fdf1bb304"}});

db.properties.findOne({"_id" : "588bdce69045439fdf1bb304"});




// db.properties.findOne({"address" : " 1721 SW 116TH WAY"});
db.properties.findOne({"address" : {$regex : ".*1721 SW 116TH WAY*"}});

db.properties.findOne({"_id" : {$regex : ".*588bdce69045439fdf1bb304*"}});




db.properties.find({ "FollowUp_Call_Date.$date": {"$gte": new Date(2017, 0, 26) }});


db.properties.find({ "FollowUp_Call_Date": : {$regex : ".*2-19-17*"}}});


WORKING
db.properties.find({ "FollowUp_Call_Date": {"$gte": new Date(2017, 0, 24) }});


db.properties.find({ "FollowUp_Call_Date": {"$gte": new Date(2017, 0, 24) }}).pretty();


WORKING 
 - It finds the properties with Followup date of 28. 
db.properties.find({ "FollowUp_Call_Date": {"$gte": new Date(2017, 0, 27) }}).count();


db.properties.find({ "FollowUp_Call_Date": {"$gte": new Date() }}).count();
 new Date()

works :
db.properties.find({ "FollowUp_Call_Date": {"$gte": new Date() }}).count();

db.properties.find({ "Left_VM_P" : 'true' }).count();

db.properties.find({"Left_VM_P" : true}).count();


db.properties.findOne({"agent_name" : {$regex : ".*true guy 19*"}});
db.properties.find({"Send_Contract_P" : true}).count();

db.properties.find( { $where: "this.Left_VM_P == true" } );



