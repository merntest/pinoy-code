import '../styles/servicescss.css';
import bt from '../images/icon-rb.svg';
import { Service } from './Service';
const Services = () => {
    const servicesdetails = [
        {
            title:'Get Great Deals',
            description : 'Choose from 500+ airlines for low airfares!',
            icon: bt,
        } ,
        {
            title : 'Price Match Promise',
            description : 'Find low prices to destinations wordlwide.',
            icon:bt,
        },
        {
            title : 'Easy Cancellations with CheapOair',
            description : 'Convenient self-service options available online.',
            icon:bt,
        },
        {
            title : 'Expert Guidance',
            description : 'Get personalised assistance from our travel experts. ',
            icon:bt,
        },
        {
            title : 'Trusted and Qualified ',
            description : 'Over a decade of experience and millions of tickets sold every year',
            icon:bt,
        },
        {
            title : 'App Benefits ',
            description : 'Earn 2x points booking through our app.',
            icon:bt,
        },
        {
            title : 'AOTL Protected ',
            description : 'All of the flights and flight-inclusive holidays on this website are financially protected. ',
            icon:bt,
        },
    ]
return (
    <div>
    <div className='services-ini'>
        <p className="bwc">Book with Confidence</p>
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