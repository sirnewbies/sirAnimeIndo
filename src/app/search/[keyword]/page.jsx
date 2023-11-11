"use client"

import React from "react";
import AnimeUpdate from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async({ params }) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse(`search/${decodedKeyword}`)
  
  return(
    <>
    <section className="container min-h-screen">
      <Header secsion={`pencarian untuk ${decodedKeyword}...`}/>
      <AnimeUpdate api={searchAnime}/>
    </section>
    </>
  )
}

export default Page;