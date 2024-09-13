"useClient";

import React from "react";
import Link from "next/link";

type PokemonHeaderProps = {
    name: string;
};

const PokemonHeader = ({ name }: PokemonHeaderProps) => {
    return (
        <div className="flex justify-around">
            <Link href={"/pokedex"} passHref className="flex-none w-36">
                    <img
                        src={"/arrow_back.png"}
                        alt={name}
                        height={30}
                        width={30}
                    />
            </Link>
            <h1 className="capitalize text-white flex-initial w-64 text-2xl font-bold">{name}</h1>
        </div>
    );
};

export default PokemonHeader;
