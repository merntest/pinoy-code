import '../styles/servicescss.css';
import bt from '../images/icon-rb.svg';
import { Service } from './Service';
const Services = () => {
    const servicesdetails = [
        {
            title:'Great Flight Deals ',
            description : 'Choose from +20 Airline for cheap Philippines flights.',
            icon: bt,
        } ,
        {
            title : 'Tagalog Speaking Agents ',
            description : 'Our team of Tagalog-speaking agents is here to help you.',
            icon:bt,
        },
        {
            title : 'Cheapest Fares ',
            description : 'Cheapest flight to Philippines for your flexible date.',
            icon:bt,
        },
        {
            title : 'Guaranteed Price Match ',
            description : "Find the same flight fare cheaper elsewhere? We'll price match it!",
            icon:bt,
        },
        {
            title : 'Free Date Change ',
            description : 'Enjoy a free date change for your convenience and flexibility.',
            icon:bt,
        },
        {
            title : 'ATOL Protected Bookings',
            description : 'Your safety is our priority with ATOL-protected bookings arrangements.',
            icon:bt,
        },
        {
            title : 'Easy Cancellations  ',
            description : 'Book with confidence knowing we offer easy cancellations for your convenience.',
            icon:bt,
        },
        {
            title:'flexible flight booking payment',
            description:'Enjoy the freedom of flexible flight booking payment choices',
            icon:bt,
        },
    ]
return (
    <div>
            <p className="bwc">Book with Confidence</p>
    <div className='services-ini'>
    
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='items-services'>
            {
                servicesdetails.map((services,index)=>{
              
            // <div className='item'>
            //     {/* <span className='img-bt'></span> */}
            //     <img src={bt}></img>
            //     <p className='content'>
            //         <p className='headd'>Get Great Deals</p>
            //         <p className='sub-c'>Choose from 500+ airlines for low airfares!</p>
            //     </p>
            // </div>
            return (
                <Service key={index} {...services}/>
            )
              })
            }
        </div>

   
    </div>
)
}

export default Services;