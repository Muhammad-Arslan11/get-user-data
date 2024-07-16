
// use HXR to get data of 10 users from an API

//  const url = 'https://jsonplaceholder.typicode.com/users';  // this won't work on diff domain
const url = 'http://127.0.0.1:5500/127.0.0.1';


const request = new XMLHttpRequest(); // create request object


// handle error
if(request.status != 200){
    console.log("request failed!!")
}else{
    console.log(request.state);
}
/* this request fails because of security reasons: modern browsers do not allow to send 
 http requests across different domains, this makes your data vulnerable to other sites.
 To make http request using XHR, your url must point to the same domain from where request has been sent. 
*/

request.open('GET', url); // specify method and url
request.send() // send request


