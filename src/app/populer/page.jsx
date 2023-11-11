"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utils/HeaderMenu";
import Pagination from "@/components/Utils/Pagination";
import React, { useEffect, useState } from 'react';
import { getAnimeResponse } from "../libs/api-libs";
import AnimeUpdate from "@/components/AnimeList";

const Page = () => {
    const server = "kuronime";
    const [page, setPage] = useState(1)
    const [populerAnime, setPopulerAnime] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("popular", `page=${page}`)
        setPopulerAnime(populerAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    return(
        <> 
        <div className="container text-white">
            <HeaderMenu title={`Anime Populer #${page}`}/>
            <AnimeUpdate api={populerAnime}/>
            <Pagination page={page} lastPage={populerAnime.maxPage} setPage={setPage}/>
        </div>
        </>
    )
}

export default Page;