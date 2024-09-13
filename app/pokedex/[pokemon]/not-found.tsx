"use client";

import Link from "next/link";
import React from "react";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>Pokemon not found</div>
            <iframe
                src="https://giphy.com/embed/6nWhy3ulBL7GSCvKw6"
                allowFullScreen
            ></iframe>
            <Link className='bg-yellow-300' href={"/pokedex"}>Go back to Pokedex</Link>
        </div>
    );
};

export default Error;
