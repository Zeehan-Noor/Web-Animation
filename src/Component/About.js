import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import "./About.css";
export default function About()
{
    const ref = useRef();
    useEffect(()=>
    {
        lottie.loadAnimation({
            container:ref.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:require("./Data/Aboutus.json")
        })
    },[])
    return(
        <div className="ContainerAbout">
            <div align="center" id="leftAboutBox">
            <br/> <br/> <br/>
                <h1>About US</h1> <br/>
                <h3 className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br/> In rhoncus turpis nisl, vitae dictum mi semper convallis.
                    <br/>  <br/> Ut sapien leo, varius ac dapibus a, cursus quis ante.
                          Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. 
                    </h3>
            </div>
            <div align="center" id="rightAboutBox" ref={ref}>

            </div>
        </div>
    )
}