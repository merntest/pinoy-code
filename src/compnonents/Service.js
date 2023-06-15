import '../styles/servicescss.css';
 export const Service = ({title,description,icon})=>{
return (
    // <div className='stuff'>
    //  <div className='item'>
    //     <div className='ser'>
    //             {/* <span className='img-bt'></span> */}
    //             <img  src={icon}></img>
    //             <div className='things'>
             
    //             <p className='headd'>{title} </p>
                
    //             </div>
    //             </div>
                
    //         </div>
        
               
                
    //         </div>
    <div class='t'>
     <div class='img'>
          <img  src={icon}></img>
          </div>
          <div class='tex'>
        <p className='headd'>{title} <br></br><p className='dep'> {description}</p> </p>
        
        </div>
       
    </div>


   

)
}

