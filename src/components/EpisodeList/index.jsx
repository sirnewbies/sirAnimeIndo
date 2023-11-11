"use client"

import React, { useState } from "react";
import VideoPlayer from "../Utils/VideoPlayer";

const EpisodeList = ({ totalEpisodes }) => {

    const [selectedEpisode, setSelectedEpisode] = useState(1)

    const handleEpisodeChange = (event) => {
        event.preventDefault()
        setSelectedEpisode(parseInt(event.target.value))
    }

    return(
        <div>
            <div className="flex justify-center pt-3">
                <div className="p-1 px-3">
                    <select onChange={handleEpisodeChange} value={selectedEpisode}
                    className="rounded">
                        {
                            Array.from({length: totalEpisodes}, (_, index) => (
                                <option key={index} value={index + 1}>episode {index + 1}</option>
                            ))
                        }
                    </select>
                </div>
                <button className="rounded px-2 text-white bg-color-background-500 hover:bg-color-primary-light">tonton episode {selectedEpisode}</button>
            </div>
            <VideoPlayer videoId={selectedEpisode}/>
        </div>
    )
}

export default EpisodeList;