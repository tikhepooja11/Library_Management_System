# Library_Management_System

BrewAPPS Assignment - Library Management System (Book store) 

Hello Pooja here...! I have completed the assignment as per the requirements, I am giving assignment name as Library Management System
I am Also attaching POSTMAN API collection (json file) with project files only.

Technologies Used ->

Nodejs / Express.js / REST API / Mongoose  / Nodemon
Using MVC architecture for code seperation (server.js -> DB config / .env file -> routes -> controllers -> models)
Express js framework to fastify the NodeJS App
Mongo DB Atlas (cloud solution) as database

--------------------------------------------------------------------------
HOW TO USE :

POSTMAN API COLLECTION FILE -> https://github.com/tikhepooja11/Library_Management_System/blob/master/Library_Managament_System.postman_collection.json
Import the Postman APIs json in Postman Application
API EndPoints -> 
  1.  viewAllBooks - To list all books
  2.  getBookById - Get single book by its id also handled with non-existing id
  3.  updateBook - Update a book by id also handled with non-existing id
  4.  deleteBook - Delete a book by id also handled with non-existing id
  5.  addBook -  Add a new book in database

--------------------------------------------------------------------------
PROJECT RUN COMMAND -> 

npm start -> will trigger nodemon server.js
or
node server.js

--------------------------------------------------------------------------
HOSTING

deployment platform - RENDER (provides free website hosting)
Hosted website URL - https://library-management-system2-215w.onrender.com/ping 

Deployment process -> 
1. Pushed my code repo to github remote repo
2. Signedup with render & clicked on new web service
3. Integreated my Github account with RENDER
4. Pulled the Library Management System github repo on render & clicked on connect
5. Provided the envrionment variables as PORT & MONGO_URL for atlas
6. Provided npm build command, root repo as optional, and script start command
7. clicked on create web service
8. It will show all the logs and boommm finally will show your webservice is Live !!!!


   ![Screenshot (21)](https://github.com/tikhepooja11/Library_Management_System/assets/47672660/9a9551c4-cdc5-4912-952b-7c4a1054b6f0)
   ![Screenshot (20)](https://github.com/tikhepooja11/Library_Management_System/assets/47672660/aaa7ac75-1ea7-4b71-af18-d0e13c92cd9a)
   ![Screenshot (22)](https://github.com/tikhepooja11/Library_Management_System/assets/47672660/1388267b-6726-4c84-81a7-bf9cae952dd4)




