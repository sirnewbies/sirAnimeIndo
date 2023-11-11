"use client"

import React, {useRef, useEffect} from "react"
const VideoPlayer = (videoId) => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current){

        }
    },[])
    return(
        <video ref={videoRef} width={350} height={350} controls autoPlay>
            <source src={videoId}></source>
        </video>
    )
}

export default VideoPlayer;



// import React from "react";

// const VideoPlayer = ({ videoSource }) => {
//     return(
//         <div>
//             <video controls>
//                 <source src={videoSource} type="video/mp4"/>
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     )
// }

// export default VideoPlayer;