<template>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" alt="Pokémon">
    <img v-show="showPokemon" class="fade-in" :src="imgSrc" alt="Pokémon">
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }

  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>