After Setting up the server we have added two user in an array of userAuthFile.txt as JSON object

*****checkUSerAuth.sj******
--------------------------
This file is designed to take the currentloggeduser and a callback function as argument
It read the registered user in an array as userlist, then it matches the details of the logged user
with each user in the userlist and finally returns an object with some details to the calling fucntion by calling the call back
and passing it the object

The view controller takes the validuser object returned from checkUserAuth function as a response.

******* installing npm install cors ************* Update (1.2)
Inorder to allow different json content type we have set cors in our server by '
const cors = require('cors');
app.use(cors());
2. We have upadted the server response. As now it is sending res.send(JSON.Stringify(obj)); so that when we do do fetch from the 
fromt end we will get the JSON response from the server.

---------------------- UPADTE (1.3) ---------------------------
********* adding app.use(express.json()); to parse the JSON objcet data sent in the request********


------------------- UPDATE (1.4) ---------------------------------
We will upadte the app.jsx to send the details of the current user whose data is sent in a request through the
JSON objcet by the client and also print the response.

 ------------------- UPDATE (2.1) ------------------------------
 When the clinet is requesting on adduser we are saving the data to the data base creating a new table with 
 the added user details.

 -------------------- UPDATE (3.1) -----------------------------------------
 We have upadted the storedata.js to store the user details when a new user is added. The data is stored in three different files
 we have added to the userAuthFile so that he can login, userDataBase so that user can be added or deletd and User Nmae 
 file so that his roles can be modified.