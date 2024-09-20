
import  car2 from  './car2.jpg';
import car3 from './car3.webp';
import {useState} from 'react';
import carIcon from './carIcon.png'

const Navbar = () =>{
    const[username, setUsername] =useState('');
    const[password, setPassword] = useState('');

const submit = ()=> {
    document.getElementById("login").classList.add("hidden");
    if(username=="username" && password == "123456"){
         
           window.localStorage.setItem("loggedin", "true");
           window.location.reload();
    
    }
    else{
        alert("Login or Password is wrong");
        
    }
}

const loginOpen = () =>{
   document.getElementById("login").classList.remove("hidden");

}

const loginClose = () =>{
    document.getElementById("login").classList.add("hidden");
}

const logOut = () =>{
    window.localStorage.getItem("loggedin")
    window.localStorage.removeItem("loggedin");
   window.location.reload();
}

var user = window.localStorage.getItem("loggedin");

    return(
        <>



  

        <div id="navbarDiv " className='flex flex-x bg-blue-400 text-black h-[60px]  '>
 <div className="ml-3">
            <img  className="h-[30px] mb-0 ml-4 rounded-xl" src={carIcon} alt="img"/>
<p className=' mt-0'>Pool My Ride</p>       
 </div>
        
<div className ="ml-[450px] mt-[15px] ">
    <ul className='flex flex-x-3 '>
        <li className='mr-4 hover:text-white' ><a className=""  href="index1.html">Home</a></li>
        <li  className='mr-4  hover:text-white' ><a href="#home"><button>View Cars</button></a></li>  
        <li className='mr-4  hover:text-white'  ><a href="#aboutus">About Us</a></li>
        <li className='mr-4  hover:text-white' ><a href="#aboutus">Contact Us</a></li>   
    </ul>
</div>
        
        <div id="loginBtn" className="ml-[550px] mt-[15px]">
            <button className="btn" onClick={loginOpen}>{user? "": "Login"} </button>
         </div>
         

         <div id="logout" className='ml-[1350px] mt-[15px] absolute'>
            <button className='' onClick={logOut}>{user? "Logout" : ""}</button>
         </div>

        </div>        



<div className='image-container  relative '>
<div className=' text-overlay  absolute ml-[100px] mt-[150px]   '>

        
<div  id="login" className='h-[300px] w-[550px] border border-emerald-800  bg-emerald-200 rounded-2xl absolute mt-[20px] ml-[400px] flex flex-col hidden  '>
  <h1 className='font-semibold text-2xl ml-[230px] mt-[20px]'>Login</h1>
  <input onChange={e => setUsername(e.target.value)} id="userName"  className="m-[10px] mt-[50px] ml-[70px] w-[400px] h-[40px] rounded-[7px]" type="text" placeholder="username"/>
  <input onChange={e => setPassword(e.target.value)} id="password" className="m-[10px] ml-[70px]  w-[400px]  h-[40px] rounded-[7px]" type="password" placeholder='Password'/>                
 <div className='flex ml-[160px] mt-[30px]'>
  <button  onClick={submit} className='m-[5px] bg-green-300 p-1 hover:text-white'>Submit</button>
  <button  onClick={loginClose} className='ml-[70px] bg-red-300 p-1 rounded h-8 mt-1 px-2 hover:text-white'>Close</button>
 </div>
  </div>



    <p className='text-[50px]  text-amber-400'>MAKE YOUR JOURNEY COMFORTABLE AND AFFORDABLE</p>
    <p className='text-[25px] mr-[70px]  text-blue-200' >NO 1 ONLINE CAR BOOKING PLATFORM IN THE TOWN, 100S OF CAR BOOKINGS IN A DAY, WITH SAFETY AND SECURUTY AS OUR TOP PRIORITY, BOOK YOUR RIDE AND HAVE A HAPPY JOURNEY, WUJFUGB UFRT9I OI876578</p>
    <button  className='text-amber-500  bg-emerald-800 text-[20px] rounded  p-2 ml-[550px] mt-[30px]'><a href= "#home" >Book Now</a></button>
     </div>
    <img  className="  h-[680px] w-[1540px]"  src={car3} alt="car3"/>
  
</div>

        <div className=" mr-[1000px] w-[560px] px-[20px] py-[15px] hidden">
        <form>
            <input  className="w-[500px] h-[40px] border-2 border-black-600" type="text" name="name" placeholder="Enter Name"></input>
            <input  className="w-[500px] h-[40px]" type="text" name="PickUp Spot1" placeholder="Enter PickUp Spot"></input>
            <input className="w-[500px] h-[40px]"  type="text" name="Destination1" placeholder="Enter Destination"></input>
            <input  className="w-[500px] h-[40px]" type="text" name="Landmark1" placeholder="Enter LandMark"></input> 
            <input className="w-[500px] h-[40px]"  type="time" name="time"></input>

        </form>
    </div>


    

        </>
    )
}

export default Navbar