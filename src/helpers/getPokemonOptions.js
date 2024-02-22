import pokemonApi from "@/api/pokemonApi";

const getPokemonList = () => {
    const pokemonOptions = Array.from(Array(650));
    return pokemonOptions.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
    const mixedPokemon = getPokemonList().sort(() => Math.random() - 0.5);
    const pokemonNames = await getPokemonNames(mixedPokemon.splice(0, 4));
    return pokemonNames
};

const getPokemonNames = async (pokemonList = []) => {
    const promises = pokemonList.map((pokemon) =>
        pokemonApi.get(`/${pokemon}`)
    );

    const pokemonData = await Promise.all(promises);
    return pokemonData.map(({ data }) => ({
        id: data.id,
        name: data.name,
    }));
};

export default getPokemonOptions;
