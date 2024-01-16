import React from "react";
import dynamic from 'next/dynamic'

export function VideoComponent(){
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    let videosrc = "/images/animation.mp4";
// 
    return(
        <div>
             <ReactPlayer
                width="100%"
                height="auto"
                url={videosrc}
                controls={true}
                autoplay={true}
             
                light={false}
             
                pip={true}
                style={{marginTop: "30px"}}
            />
            {/* <source src={videosrc} type="video/mp4" />
              <video  width="100%" height="auto" controls autoPlay muted src="/images/animation.mp4" style={{marginTop: "30px"}}/> */}
              {/* <video width="100%" height="auto" controls autoPlay style={{marginTop: "30px"}}>
            <source src="/images/animation.mp4" type="video/mp4"/>
            </video>                        */}
              
        </div>
       
    )
}