After Setting up the server we have added two user in an array of userAuthFile.txt as JSON object

*****checkUSerAuth.sj******
--------------------------
This file is designed to take the currentloggeduser and a callback function as argument
It read the registered user in an array as userlist, then it matches the details of the logged user
with each user in the userlist and finally returns an object with some details to the calling fucntion by calling the call back
and passing it the object

The view controller takes the validuser object returned from checkUserAuth function as a response.