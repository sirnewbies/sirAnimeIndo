import React from "react";
import Link from "next/link";

const Header = ({secsion, linkHref, linkSecsion}) => {
    return(
        <div className=" flex justify-between h-10 md:p-10 items-center ">
            <h1 className="text-white text-xl font-bold">{secsion}</h1>
            {linkHref && linkSecsion && secsion ?
            <Link href={linkHref} className="md:text-md text-sm underline text-white hover:text-color-primary transition-all ">{linkSecsion}</Link>
            : null
        }
            
        </div>
    )
}

export default Header;