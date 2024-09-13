import { getPokemonList } from "@/app/api";
import Link from "next/link";
import PokemonListItem from "@/app/Components/PokemonListItem";
import { Pokemon } from "pokenode-ts";

const PokeDex = async () => {
    const { results: pokemonList } = await getPokemonList();

    return (
        <div>
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                {pokemonList.map((pokemon: Pokemon) => (
                    <PokemonListItem name={pokemon.name} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
};

export default PokeDex;
