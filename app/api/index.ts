import { POKEMON_API_URL } from "../helpers/constants";

export const getPokemonList = async (
    offset: number = 0,
    listLimit: number = 20
) => {
    const request = await fetch(
        `${POKEMON_API_URL}/pokemon/?offset=${offset}&limit=${listLimit}`
    );
    const data = await request.json();
    return data;
};

export const getPokemonByName = async (pokeName: string) => {
    try {
        const request = await fetch(`${POKEMON_API_URL}/pokemon/${pokeName}`);
        const data = await request.json();
        return data;
    } catch (error) {
        console.log("There was an error");
    }
};

export const getPokemonById = async (pokeId: number) => {
    const request = await fetch(`${POKEMON_API_URL}/pokemon/${pokeId}`);
    const data = await request.json();
    return data;
};
