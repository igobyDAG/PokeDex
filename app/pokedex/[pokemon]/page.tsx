// "use client";

import React from "react";
import { notFound } from "next/navigation";
import clsx from "clsx";

import { POKEMON_COLOR_CODES } from "@/app/helpers/constants";
import { getPokemonByName } from "@/app/api";
import PokemonHeader from "@/app/Components/PokemonHeader";
import PokemonSprite from "@/app/Components/PokemonSprite";
import PokemonInfoCard from "@/app/Components/PokemonInfoCard";

const Pokemon = async ({ params }: { params: { pokemon: string } }) => {
    const pokemonData = await getPokemonByName(params.pokemon);

    if (!pokemonData) {
        notFound();
    }
    const { type: mainType } = pokemonData.types[0];

    // console.log(POKEMON_COLOR_CODES[mainType.name as keyof typeof POKEMON_COLOR_CODES]);
    return (
        <div className={clsx(POKEMON_COLOR_CODES[mainType.name as keyof typeof POKEMON_COLOR_CODES])}>
        {/* // <div className="bg-bug"> */}
            <div className="flex flex-col items-center">
                <PokemonHeader name={pokemonData.name} />
                <PokemonSprite
                    src={pokemonData.sprites.other?.home.front_default ?? ""}
                    alt={pokemonData.name}
                />
                <PokemonInfoCard
                    weight={pokemonData.weight}
                    height={pokemonData.height}
                    abilities={pokemonData.abilities}
                    stats={pokemonData.stats}
                    types={pokemonData.types}
                />
            </div>
        </div>
    );
};

export default Pokemon;
