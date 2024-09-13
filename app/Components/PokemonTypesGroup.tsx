import React from "react";
import PokemonTypeChip from "./PokemonTypeChip";
import { Pokemon } from "pokenode-ts";

const PokemonTypesGroup = ({ types }: Partial<Pokemon>) => {
    return (
        <div className="flex justify-center gap-4">
            {types?.map(({ type }, i) => (
                <PokemonTypeChip key={i} type={type.name} />
            ))}
        </div>
    );
};

export default PokemonTypesGroup;
