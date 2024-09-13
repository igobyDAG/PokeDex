import React from "react";
import clsx from "clsx";

import { POKEMON_COLOR_CODES } from "../helpers/constants";

const PokemonTypeChip = ({ type }: { type: string }) => {
    const backgroundColor =
        POKEMON_COLOR_CODES[type as keyof typeof POKEMON_COLOR_CODES];

    return (
        <div
            className={clsx(
                "flex",
                "justify-center",
                "rounded-2xl",
                "text-white",
                "text-sm",
                "font-bold",
                "w-12",
                backgroundColor
            )}
        >
            {type}
        </div>
    );
};

export default PokemonTypeChip;
