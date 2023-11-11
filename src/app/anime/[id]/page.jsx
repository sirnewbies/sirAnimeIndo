import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import React from "react";

const Page = async({ params: {id}}) => {

    const getDataAnime = await getAnimeResponse(`anime/${id}`)
    const anime = getDataAnime.data
    console.log(anime)
    return(
        <div className="container min-h-screen">
            <div className="pt-5">
                <div className="p-4 flex sm:flex-nowrap flex-wrap gap-4 justify-center items-center text-white rounded bg-color-background-500">
                    <Image src={anime.poster} alt="not found"
                        width={350} height={350}
                        className="rounded object-cover"/>
                    <div className="">
                        <p className="pt-2 md:pt-0">Judul: {anime.title} ({anime.japanese_title})</p>
                        <p className="pt-2 md:pt-0">Rating: {anime.rating}</p>
                        <p className="pt-2 md:pt-0">Produser: {anime.produser}</p>
                        <p className="pt-2 md:pt-0">Status: {anime.status}</p>
                        <p className="pt-2 md:pt-0">Episode: {anime.episode_lists.length}</p>
                        <p className="pt-2 md:pt-0">Tahun: {anime.release_date}</p>
                        <p className="pt-2 md:pt-0">Genre: {anime.genres.map(genre => genre.name).join(', ')}</p>
                        <p className="pt-2 md:pt-3">Sinopsis: {anime.synopsis}</p>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="p-4 pt-10 flex sm:flex-nowrap flex-wrap gap-4 text-white rounded bg-color-background-500">
                    <button>Tonton: (Maaf belum tersedia)</button>
                </div>
                </div>


            </div>

        </div>

    )
}

export default Page;