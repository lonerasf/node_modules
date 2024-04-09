chat 

- Then create file ->index.js->Type code:
consthttp=require("http");
constexpress=require("express");
constpath=require('path');
const {Server}=require("socket.io");
constapp=express();
constserver=http.createServer(app);
constio=newServer(server);

//Socket.io
io.on('connection',(socket)=>{
    // console.log("A new user has connected", socket.id);
    socket.on("user-message",(message) =>{
        // console.log("A new user message",message);
        io.emit("message",message);
    } );
});

app.use(express.static(path.resolve("./public")));
app.get('/',(req,res)=> {
    returnres.sendFile('/public/index.html')
});
server.listen(8000, ()=>console.log('server started at 8000'));

-	Then create folder as public->create file->index.html:
-	<!DOCTYPEhtml>
-	<htmllang="en">
-	<head>
-	    <metacharset="UTF-8">
-	    <metaname="viewport"content="width=device-width, initial-scale=1.0">
-	    <title>Chat_App</title>
-	</head>
-	<body>
-	    <h1> Chatting </h1>
-	
-	    <inputtype="text"id="message"placeholder="Enter Message"/>
-	    <buttonid="sendbtn">Send</button>
-	    <divid="messages">
-	
-	    </div>
-	    <!--<button onclick="createConnection()";> Create WS Connection</button> -->
-	
-	    <scriptsrc = "/socket.io/socket.io.js"></script>
-	    <script>
-	    // function createConnection(){
-	    //     const socker =io();
-	    // }
-	    constsocket = io();
-	    constsendbtn =document.getElementById("sendbtn");
-	    constmessageInput=document.getElementById("message");
-	    constallmessages= document.getElementById("messages");
-	
-	    socket.on("message",(message)=>{
-	        constp=document.createElement("p");
-	        p.innerText=message;
-	        allmessages.appendChild(p);
-	    })
-	
-	    // socket.on("message",(message) => console.log(message));
-	
-	    sendbtn.addEventListener("click",(e) => {
-	        constmessage = messageInput.value;
-	        console.log(message);
-	        socket.emit("user-message", message);
-	        
-	    } );
-	    </script>
-	</body>
-	</html>





form  
importlogofrom'./logo.svg';
importReact,{useState} from'react';
import'./App.css';

functionApp() {
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [mobile,setMobile]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  functionvalidateForm(){
    if(firstname.length==0){
      alert('Invalid Input,First Name cannot be empty')
      return
    }
    if(email.length==0){
      alert('Invalid Input,Email cannot be empty')
      return
    }
    if(password.length<8){
      alert('Invalid Password,Password must contain greater than or equal to 8 character')
      return
    }
    letcountUpperCase=0
    letcountLowerCase=0
    letcountDigit=0
    letcountSpecialChar=0
    for(leti=0;i<password.length;i++){
      constspecialChars=[
        '!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':','<','>'
      ]
      if(specialChars.includes(password[i])){
        countSpecialChar++
      }
      elseif(!isNaN(password[i]*1)){
        countDigit++
      }
      else{
        if(password[i]==password[i].toUpperCase()){
          countUpperCase++
        }
        if(password[i]==password[i].toLowerCase()){
          countLowerCase++
        }
      }
      if(countLowerCase==0){
        alert('Invalid form,O Lower Case Characters in password')
        return
      }
      if(countUpperCase==0){
        alert('Invalid form,O Upper Case Characters in password')
        return
      }
      if(countDigit==0){
        alert('Invalid form,O digits in password')
        return
      }
      if(countSpecialChar==0){
        alert('Invalid form,O Special Characters in password')
        return
      }
      alert('Form is valid')
    }

  }
  return(
  <divclassname="main">
    <form>
      <inputplaceholder='First Name'onChange={(e)=>setFirstName(e.target.value)}/>
      <inputplaceholder='Last Name'onChange={(e)=>setLastName(e.target.value)}/>
      <inputplaceholder='Mobile Number'onChange={(e)=>setMobile(e.target.value)}/>
      <inputplaceholder='Age'onChange={(e)=>setAge(e.target.value)}/>
      <inputplaceholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
      <inputplaceholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
      <buttontype='submit'onClick={()=>{validateForm()}}>Submit</button>
    </form>
  </div>
  );
}

exportdefaultApp;



app.css

.main{
  padding: 5%;
  text-align:center;
}
input{
  padding: 1%;
  width: 50%;
  margin: 1%2%;
}
button{
  font-weight: bold;
  background:red;
  border: none;
  color: white;
  padding: 1%;
}



app.js

importlogofrom'./logo.svg';
importReact,{useState} from'react';
import*asyupfrom'yup'
import'./App.css';

functionApp() {
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [mobile,setMobile]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  constuserSchema=yup.object().shape({
    firstname :yup.string().required(),
    lastname:yup.string(),
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
    age:yup.string(),
    mobile:yup.string(),
  })
  asyncfunctionvalidateForm(){
    letdataObject={
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password,
      age:age,
      mobile:mobile
    }
    constisValid=awaituserSchema.isValid(dataObject)
    if(isValid){
      alert('Form is valid')
    }else{
      alert('Form is Invalid')
    }
  }
  return(
  <divclassname="main">
    <form>
      <inputplaceholder='First Name'onChange={(e)=>setFirstName(e.target.value)}/>
      <inputplaceholder='Last Name'onChange={(e)=>setLastName(e.target.value)}/>
      <inputplaceholder='Mobile Number'onChange={(e)=>setMobile(e.target.value)}/>
      <inputplaceholder='Age'onChange={(e)=>setAge(e.target.value)}/>
      <inputplaceholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
      <inputplaceholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
      <buttontype='submit'onClick={()=>{validateForm()}}>Submit</button>
    </form>
  </div>
  );
}

exportdefaultApp;



-------------------------------



import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
function App() {
const url="https://jsonplaceholder.typicode.com/users"
const [data,setData]=useState([])
const fetchInfo=()=>{
return fetch(url)
.then((res)=>res.json())
.then((d)=>setData(d))
}
useEffect(()=>{
fetchInfo();
},[])
return (
<div className="App">
<h1 style={{color:'green'}}>using Javascript inbuilt
FETCH API</h1>
<center>
{data.map((dataObj,index)=>{
return(
<div
style={{
width:"15em",
background:"#35D841",
padding:2,
borderRadius:10,
marginBlock:10,
}}
>
<p
style={{fontSize:20,color:'white'}}>{dataObj.name}</p>
<p style={{fontSize:20,color:'white'}}>{dataObj.id},{dataObj.username},{dataObj.email}</p>
</div>
)
})}
</center>
</div>
);
}
export default App;


import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import axios from "axios"
function App() {
const url="https://jsonplaceholder.typicode.com/users"
const [data,setData]=useState([])
const fetchInfo=()=>{
return axios.get(url).then((res)=> setData(res.data));
}
useEffect(()=>{
fetchInfo();
},[])
return (
<div className="App">
<h1 style={{color:'green'}}>using Javascript Axios
inbuilt FETCH API</h1>
<center>
{data.map((dataObj,index)=>{
return(
<div
style={{
width:"15em",
background:"#35D841",
padding:2,
borderRadius:10,
marginBlock:10,
}}
>
<p
style={{fontSize:20,color:'white'}}>{dataObj.name}</p>
<p
style={{fontSize:20,color:'white'}}>{dataObj.id},{dataObj.us
ername},{dataObj.email}</p>
</div>
)
})}
</center>
</div>
);
}
export default App;


import logo from './logo.svg';
import './App.css';
import useSWR from 'swr';
function App() {
const fetcher = (...args)
=>fetch(...args).then((res)=>res.json());
const Swr=()=>{
const{
data:countries,
error,
isValidating,
}=useSWR('https://restcountries.com/v2/all',fetcher);
if(error) return <div className='failed to load'></div>;
if(isValidating)return<div
className="loading">Loading...</div>;
return(
<div>
{countries &&
countries.map((country,index)=>(
<img key={index}
src={country.flags.png}
alt='flag' width={100}
></img>
)
)
}
</div>
)
}
return <div><Swr/></div>
}
export default App;





STEP 1: create a folder where you want to save your project
STEP 2: open that folder through vs code open the terminal and write following command
➢ Npx create-react-app “demo4”
STEP 3: Run the project using below cmd
➢ Npm start
Step 4: write the code cut the header part and write below code



//import logo from './logo.svg';
import './App.css';
import useFetch from "react-fetch-hook"
function App() {
const{data:posts, isLoading,error}=
useFetch('https://jsonplaceholder.typicode.com/posts')
if (isLoading){
return <h2>
Loading..
</h2>
}
if(error) {
return <div className='error'>Error: error
fetching</div>
}
return (
<div className="App">
<h1 className='title'>posts of users </h1>
{posts.map((post)=>(
<div key={post.id} className='card'>
<h2 className='users'> { post.title}</h2>
<p>{post.body}</p>
</div>
))}
</div>
);
};
export default App;


STEP 6: create new folder outside the demo name test
STEP 7:Then create new file inside test folder name it index.js
A) Open index.js
And write following code

function helloNpm(){
return "hello NPM"
}
module.exports = helloNpm

B) now on the terminal write cmd
➢ git init
➢ git add .
➢ git commit -m “initial comment”