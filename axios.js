

const axios = require('axios');



const url = "https://jsonplaceholder.typicode.com/users";
const request = axios.get(url);

request.then((response)=>{
    console.log(response)

//     if(!response.ok){
//         throw new Error("request failed!!");    
// }
// else if(response.ok){
//    console.log('request successful');
// }
 return response.json();

}).then((data) =>{
    // use for loop to get 10 users data
    for(let user = 0; user <= 10; user++){
        console.log(data);
}
})
// handle error
.catch((error) =>{
    console.log("error:" , error)
});