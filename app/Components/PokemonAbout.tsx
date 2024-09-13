import { Pokemon } from "pokenode-ts";
import React from "react";

const AboutSection = ({
    data,
    unit,
    stat,
}: {
    data: number;
    unit: string;
    stat: string;
}) => {
    return (
        <div className="flex-col items-center">
            <p>
                {data} {unit}
            </p>
            <p>{stat}</p>
        </div>
    );
};

const PokemonAbout = ({ weight, height, abilities }: Partial<Pokemon>) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-gray-400 font-bold">About</h2>
            <div className="flex w-full justify-around">
                <AboutSection data={weight!} unit="kg" stat="weight" />
                <AboutSection data={height!} unit="m" stat="height" />
                <div>
                    {abilities?.map(({ ability }, i) => (
                        <p key={`${ability}-${i}`}>{ability.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonAbout;
