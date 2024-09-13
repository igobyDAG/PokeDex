"useClient";
import React from "react";

import { Pokemon } from "pokenode-ts";
import PokemonAbout from "./PokemonAbout";
import PokemonStats from "./PokemonStats";
import PokemonTypesGroup from "./PokemonTypesGroup";

const PokemonInfoCard = ({
    weight,
    height,
    abilities,
    stats,
    types
}: Partial<Pokemon>) => {
    return (
        <div className="size-11/12 bg-white rounded-lg p-3 m-5">
            <PokemonTypesGroup types={types}/>

            <PokemonAbout
                weight={weight}
                height={height}
                abilities={abilities}
            />
            <br />
            <PokemonStats stats={stats} />
        </div>
    );
};

export default PokemonInfoCard;
