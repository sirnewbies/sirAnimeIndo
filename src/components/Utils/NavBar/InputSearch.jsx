"use client"

import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    
    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if (!keyword) return

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    
    return(
        <div className="relative">
            <input placeholder="cari anime..." 
            className="w-full p-2 rounded border-2 focus:outline-none border-color-primary text-color-primary"
            ref={searchRef} onKeyDown={handleSearch}
            />
            <button className="absolute end-1 top-1 px-3 py-1 rounded" onClick={handleSearch}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    )
}

export default InputSearch;