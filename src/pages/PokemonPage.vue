<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemonList="pokemonList" @selectedPokemon="checkAnswer" />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button class="fade-in" @click="newGame">Nuevo juego</button>
        </template>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions';
import PokemonPicture from '@/components/PokemonPicture';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonList: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonList = await getPokemonOptions();
            this.pokemon = this.pokemonList[Math.floor(Math.random() * 4)];
        },
        checkAnswer(pokemonId) {
            if (pokemonId === this.pokemon.id) {
                this.message = "¡Correcto! Eres un verdadero maestro Pokémon."
            } else {
                this.message = `Oops, lo siento, era ${this.pokemon.name}. Intenta de nuevo.`
            }
            this.showPokemon = true;
            this.showAnswer = true;
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.mixPokemonArray();
    }
}
</script>

<style scoped>
button {
    border-radius: 5px;
    border: 1px solid #818181;
    cursor: pointer;
    height: 40px;
    width: 110px;
}
</style>