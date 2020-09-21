import React, { useRef,useEffect } from "react";
import "./Home.css";
import Service from "./Service";
import aboutUs from "./About";
import ContactUs from "./ContactUs";

import lottie from 'lottie-web';

export default function Home()
{
    const ref = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container:ref.current,
         renderer:"svg",
         loop:true,
         autoplay:true,
         animationData:require('./Data/animation.json')   
        })
    },[])


    return(
        <div className="Row">
          <div align="center" id="leftbox" >
              <h1 className="Pragh " >We promise to bring the best solution for your bussiness !</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> In rhoncus turpis nisl.</h3>
              <button className="Button">Contact us</button>
               </div>  
            <div align="center"  id="rightbox"  ref={ref}> </div>
          <Service/>
          <aboutUs/>
          <ContactUs/>
        </div>

    )
}
