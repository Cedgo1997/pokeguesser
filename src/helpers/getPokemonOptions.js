const getPokemonList = () => {
    const pokemonOptions = new Array();
    return pokemonOptions.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
    const mixedPokemon = getPokemonList().sort(() => Math.random() - 0.5);
    getPokemonNames(mixedPokemon.splice(0, 4));
};

const getPokemonNames = (pokemonList = []) => {
    console.log(pokemonList);
};

export default getPokemonOptions;
