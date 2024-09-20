import car3 from './car3.webp'
import Dzire from './Dzire.jpg'
import ertiga_xylo from './ertiga_xylo.jpg'
import sedan from './sedan.jpg'
import swift from './swift.jpg'
import car_icon from './car_icon.png'
import seatIcon from './seatIcon.png'
import bagIcon from './bagIcon.png'



const Home = () =>{

   const contact1 = () => {
       var a = window.localStorage.getItem("loggedin");
      if(a){
         document.getElementById("contact1").classList.remove("hidden")    
      }
      else{
         alert("login to view details")
      }     
   }

   const contact2 = () => {
      var a = window.localStorage.getItem("loggedin");
     if(a){
        document.getElementById("contact2").classList.remove("hidden")    
     }  
     else{
      alert("login to view details")
   }        
  }

  const contact3 = () => {
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("contact3").classList.remove("hidden")    
  }
  else{
   alert("login to view details")
}          
}

const contact4 = () => {
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("contact4").classList.remove("hidden")    
  } 
  else{
   alert("login to view details")
}         
}

const details1 = () =>{
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("details1").classList.remove("hidden")    
  } 
  else{
   alert("login to view details")
}      
}

const details2 = () =>{
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("details2").classList.remove("hidden")    
  } 
  else{
   alert("login to view details")
}      
}

const details3 = () =>{
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("details3").classList.remove("hidden")    
  } 
  else{
   alert("login to view details")
}      
}

const details4 = () =>{
   var a = window.localStorage.getItem("loggedin");
  if(a){
     document.getElementById("details4").classList.remove("hidden")    
  } 
  else{
   alert("login to view details")
}      
}

   
     
    return(

      
        <>
      
        <div id="home" className="mb-12">
           <div className="border-2 border-grey-800 rounded w-[1000px] mt-8 ml-[200px] p-2 flex shadow-lg ">
             
             <img  className="h-[225px] ml-[10px] rounded  shadow-lg " src={swift} alt="car"/>
                <div className='p-1 ml-[20px] rounded-xl w-[800px] border-2 w-[300px] shadow-lg flex'>
                  <div className='mt-[15px] ml-[10px]' >
                  <p className='font-bold'>Swift, celerio </p>
                  <p className='font-semibold'>Owner:Rajesh Khanna</p>

                  <div className=''>
                     <p><img className='h-[15px] inline' src={car_icon} alt="car"/> 1 unit</p>
                      <p> <img className='h-[20px] inline mr-5 ml-2' src={seatIcon} alt="car"/>4 Seats</p>
                     <p>  <img className='h-[20px] inline mr-1 ml-1' src={bagIcon} alt="car"/> 2 Luggage Bags</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[10px] mb-0 hover:bg-red-200 '  onClick={contact1}>Contact</button>
                  <p  id="contact1" className='border w-[100px]  h-[40px] rounded  mt-2 hidden shadow-lg'>1234567890</p>
                  </div>
                  
                  <div className='mt-0 ml-[80px]'>
                  <div className='mt-3'>
                  <p> <b>From:</b>Vinayak Nagar </p> 
                  <p><b>To:</b>Gandhi Nagar</p>
                  <p><b>LandMark:</b>IT Circle</p>
                  <p><b>Time:</b>Around 08:30 AM</p>
                  
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[40px] hover:bg-red-200' onClick={details1}>More Details</button>
                  <div  id="details1" className='border rounded w-[150px] hidden  shadow-lg'>
                  <p>car type: Petrol</p>
                  <p>Prime Member:Yes</p>
                  </div>
                  </div>

                </div>
           
         </div>


         <div className="border-2 border-grey-800 rounded w-[1000px] mt-8 ml-[200px] p-2 flex shadow-lg ">
             
             <img  className="h-[235px] ml-[10px] rounded  shadow-lg " src={Dzire} alt="car"/>
                <div className='p-1 ml-[20px] rounded-xl w-[800px] border-2 w-[300px] shadow-lg flex'>
                  <div className='mt-[15px] ml-[10px]' >
                  <p className='font-bold'>Dzire, celerio </p>
                  <p className='font-semibold'>Owner:jashwith kumar</p>

                  <div className=''>
                  <p><img className='h-[15px] inline' src={car_icon} alt="car"/> 1 unit</p>
                      <p> <img className='h-[20px] inline mr-5 ml-2' src={seatIcon} alt="car"/>4 Seats</p>
                     <p>  <img className='h-[20px] inline mr-1 ml-1' src={bagIcon} alt="car"/> 2 Luggage Bags</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[10px]  hover:bg-red-200 ' onClick={contact2}>Contact</button>
                  <p  id="contact2" className='border w-[100px]  h-[40px] rounded  mt-2 hidden  shadow-lg'>1234567890</p>
                  </div>
                  
                  <div className='mt-0 ml-[80px]'>
                  <div className='mt-3'>
                  <p> <b>From:</b>Madhapur </p> 
                  <p><b>To:</b>kukatpally</p>
                  <p><b>LandMark:</b>Vinayak temple</p>
                  <p><b>Time:</b>Around 08:30 AM</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[40px] hover:bg-red-200' onClick={details2}>More Details</button>
                  <div  id="details2" className='border rounded w-[150px] hidden  shadow-lg '>
                  <p>car type: Petrol</p>
                  <p>Prime Member:Yes</p>
                  </div>
                  </div>

                </div>
           
         </div>


         <div className="border-2 border-grey-800 rounded w-[1000px] mt-8 ml-[200px] p-2 flex shadow-lg ">
             
             <img  className="h-[260px] ml-[10px] rounded  shadow-lg " src={ertiga_xylo} alt="car"/>
                <div className='p-1 ml-[20px] rounded-xl w-[800px] border-2 w-[300px] shadow-lg flex'>
                  <div className='mt-[15px] ml-[10px]' >
                  <p className='font-bold'>Ertiga Xylo</p>
                  <p className='font-semibold'>Owner:Ankitha das</p>

                  <div className=''>
                  <p><img className='h-[15px] inline' src={car_icon} alt="car"/> 1 unit</p>
                      <p> <img className='h-[20px] inline mr-5 ml-2' src={seatIcon} alt="car"/>4 Seats</p>
                     <p>  <img className='h-[20px] inline mr-1 ml-1' src={bagIcon} alt="car"/> 2 Luggage Bags</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[10px]  hover:bg-red-200 ' onClick={contact3}>Contact</button>
                  <p  id="contact3" className='border w-[100px]  h-[40px] rounded mt-2 hidden  shadow-lg'>1234567890</p>
                  </div>
                  
                  <div className='mt-0 ml-[80px]'>
                  <div className='mt-3'>
                  <p> <b>From:</b>Dilshuk Nagar </p> 
                  <p><b>To:</b>Gandhi Nagar</p>
                  <p><b>LandMark:</b>HRT</p>
                  <p><b>Time:</b>Around 01:30 AM</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[40px] hover:bg-red-200' onClick={details3}>More Details</button>
                  <div  id="details3" className='border rounded w-[150px] hidden  shadow-lg'>
                  <p>car type: Petrol</p>
                  <p>Prime Member:No</p>
                  </div>
                  </div>

                </div>
           
         </div>


         <div className="border-2 border-grey-800 rounded w-[1000px] mt-8 ml-[200px] p-2 flex shadow-lg ">
             
             <img  className="h-[220px] ml-[10px] rounded  shadow-lg " src={sedan} alt="car"/>
                <div className='p-1 ml-[20px] rounded-xl w-[800px] border-2 w-[300px] shadow-lg flex'>
                  <div className='mt-[15px] ml-[10px]' >
                  <p className='font-bold'>Sedan </p>
                  <p className='font-semibold'>Owner:sidarth roy</p>

                  <div className=''>
                  <p><img className='h-[15px] inline' src={car_icon} alt="car"/> 1 unit</p>
                      <p> <img className='h-[20px] inline mr-5 ml-2' src={seatIcon} alt="car"/>4 Seats</p>
                     <p>  <img className='h-[20px] inline mr-1 ml-1' src={bagIcon} alt="car"/> 2 Luggage Bags</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[10px]  hover:bg-red-200 ' onClick={contact4}>Contact</button>
                  <p  id="contact4" className='border w-[100px]  h-[40px] rounded  mt-2 hidden  shadow-lg'>1234567890</p>
                  </div>
                  
                  <div className='mt-0 ml-[80px]'>
                  <div className='mt-3'>
                  <p> <b>From:</b>Ameerpet </p> 
                  <p><b>To:</b>kukatpally</p>
                  <p><b>LandMark:</b>GRET</p>
                  <p><b>Time:</b>Around 09:30 AM</p>
                  </div>

                  <button className='bg-blue-200 w-[100px]  h-[40px] rounded mt-[40px] hover:bg-red-200' onClick={details4}>More Details</button>
                  <div  id="details4" className='border rounded w-[150px] hidden  shadow-lg '>
                  <p>car type: Petrol</p>
                  <p>Prime Member:Yes</p>
                  </div>
                  </div>

                </div>
           
         </div>

           
        </div>
        
        </>
    )
}

export default Home