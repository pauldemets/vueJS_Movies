<template>
  <div>
      <h1>Editer le film : {{movie.title}}</h1>
    <span>
      Titre : 
      <input type="text" v-model="movie.title" />
    </span>

    <span>
      Année : 
      <input type="number" v-model="movie.releaseDate" />
    </span>

    <span>
      Réalisateur : 
      <input type="text" v-model="movie.director"/>
    </span>

    <span>
      Synopsis : 
      <textarea v-model="movie.synopsis" cols="30" rows="10"></textarea>
    </span>

    

<br><br>
<router-link :to="{ name: 'home'}">Retour</router-link>


  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    deletemovie() {
      this.$emit("deletedmovie", this.movie);
    },
    edit() {
      this.$emit("newmoviename", this.movie, this.$refs.editinput.value);
    }
  },
  data: function() {
    return {
      movie: window.shared_data.movies[this.$route.params.id]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
