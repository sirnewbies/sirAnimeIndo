import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimeUpdate = ({api, tipe, ep}) => {
    return(
        <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
            {api.data.map((anime, index) => {
                return(
                    <Link href={`/anime/${anime.slug.split('/anime/')[1]}`} key={index} className="rounded text-white hover:text-color-primary-light transition-all bg-color-background-500">
                        <div className="">
                            <Image src={anime.poster} alt="..." width={350} height={350}/>
                            </div>
                        <div className="p-2">
                            <h2 className="text-sm anime-title">🍉{anime.title}</h2>
                            {ep ? 
                                <h2 className="text-sm pt-3">{anime.current_episode}</h2>
                             : null
                            }
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeUpdate;