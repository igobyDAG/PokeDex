// "useClient";
import React from "react";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";
import { getPokemonByName } from "../api";

interface MyButtonProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    href?: string;
    text: string;
}

const MyButton: React.ForwardRefRenderFunction<
    HTMLAnchorElement,
    MyButtonProps
> = async ({ onClick, href, text }, ref) => {
    const getPokemonSprite = async () => {
        const pokemonData = await getPokemonByName(text);
        return pokemonData.sprites.front_default;
    };

    const pokeSprite = await getPokemonSprite();

    return (
        <div className="flex flex-col justify-center items-center">
            <img src={pokeSprite} alt={text} width={200} height={200} />
            <a href={href} onClick={onClick} ref={ref}>
                {text}
            </a>
        </div>
    );
};

const ForwardedMyButton = React.forwardRef(MyButton);

const PokemonListItem = ({ name }: Partial<Pokemon>) => {
    return (
        <Link href={`/pokedex/${name}`}>
            <div className="size-32 flex justify-center items-center bg-gray-200 rounded-lg">
                <ForwardedMyButton text={name!} />
            </div>
        </Link>
    );
};

export default PokemonListItem;
