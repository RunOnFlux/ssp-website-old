import React from "react";
import dynamic from 'next/dynamic'
export function VideoComponent(){
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    let videosrc = "/images/ssp animation 4 for site (1).webm";

    return(
        <div>
             <ReactPlayer
                width="100%"
                height="auto"
                url={videosrc}
                controls={true}
                autoplay={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
                style={{marginTop: "30px"}}
            />
            <source src={videosrc} type="video/mp4" />
        </div>
       
    )
}