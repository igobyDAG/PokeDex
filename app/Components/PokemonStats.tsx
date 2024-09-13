"useClient";
import { Pokemon } from "pokenode-ts";
import React from "react";

const PokemonStats = ({ stats }: Partial<Pokemon>) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-gray-400 font-bold">Base Stats</h2>
            <div className="flex flex-col w-11/12">
                {stats?.map(({ base_stat, stat }, i) => (
                    <div className="flex gap-5">
                        <p className="font-bold" key={`${stat}-${i}`}>
                            {stat.name}
                        </p>
                        <p>{base_stat}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonStats;
