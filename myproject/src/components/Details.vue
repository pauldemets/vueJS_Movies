<style scoped>
.button {
  width: max-content;
  padding: 1em;
  border-radius: 100%;
  vertical-align: middle;
  border: 2px solid black;
  background-color: #056BB3;
  margin-right: 1%;
  color:white;
  font-size: 0.85em;
  font-weight: bold;
}

.button:hover {
  opacity: 0.6;
  cursor: pointer;
}

#content {
  background-color: #F1F2F6;
  margin-bottom: 2%;
  border: solid 1px black;
  padding: 1%;
  transform: translateY(15%);
  width: 80%;
  margin: auto;
  border-radius: 20px;
}
span {
  font-weight: bold;
  font-size: 1.1em;
}
</style>

<template>
  <div id="content">
    <router-link :to="{ name: 'home'}">
      <button type="button" class="button">Retour</button>
    </router-link>

    <h1>Détails du film : {{movie.title}}</h1>

    <p>
      <span>Année :</span>
      {{movie.releaseDate}}
    </p>

    <p>
      <span>Réalisateur :</span>
      {{movie.director.first_name}} {{movie.director.last_name}}
    </p>

    <p>
      <span>Synopsis :</span>
      {{movie.synopsis}}
    </p>

    <p v-if="movie.rating != null">
      <span>Note :</span>
      {{movie.rating}}
    </p>
    <p v-else>
      <router-link :to="{ name: 'rate', params: { id: movie.id }}">
        <button type="button" class="button">Noter le film !</button>
      </router-link>
    </p>

    <router-link :to="{ name: 'edit', params: { id: movie.id }}">
      <button type="button" class="button">Editer</button>
    </router-link>

    <router-link :to="{ name: 'home'}">
      <button type="button" v-on:click="deletemovie" class="button">Supprimer</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Edit",
  props: {
    msg: String
  },
  methods: {
    deletemovie() {
      window.shared_data.movies.splice(this.$route.params.id, 1);
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
