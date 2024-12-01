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