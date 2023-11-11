"use client"

import React from "react";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="container text-white min-h-screen max-w-xl mx-auto justify-center items-center flex">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={55}/>
                <h3 className="font-bold text-color-primary-light text-4xl">NOT FOUND</h3>

                <button onClick={handleGoBack} className="hover:text-color-primary-light transition-all underline">Kembali</button>
            </div>
        </div>
    )
}

export default Page;