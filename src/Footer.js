import gmail from './gmail.png'
import call from './call.jpg'
import fb from './fb.png'

const Footer = () =>{
    return(
        <> 
<div id="aboutus" className='bg-gray-700 h-[220px] text-white'>
    <p className="ml-[40px] mt-[10px] ">About Us</p>
    <p className=" mx-[40px] mt-0 "> we are the no.1 online car pooiling service provider in the city.
        we  provided a platform to the people for sharing their ride and can get profit from that,
        and others can get a ride at more affordable price.
        our first priority is always your safety and security as we always authorise the people who post a ride or request a ride.
       


    </p>

          
<div className="ml-[600px] mt-[30px] ">
   <p> <img className='h-[20px] inline mr-2' src ={gmail} alt="gmail"/>carpooling2345@gmail.com </p>
   <p>  <img className='h-[20px] inline mr-2' src ={call} alt="call"/>1234567890</p> 
   <p>  <img className='h-[20px] inline mr-2' src ={fb} alt="fb"/>carpooling.fb.com</p>
   </div>

   </div>



        </>
    )
}


export default Footer