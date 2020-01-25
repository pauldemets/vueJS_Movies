<style scoped>
.button {
  width: max-content;
  padding: 1em;
  border-radius: 100%;
  vertical-align: middle;
  border: 2px solid black;
  background-color: #056bb3;
  font-weight: bold;
  color: white;
  margin-right: 1%;
}

.button:hover {
  opacity: 0.6;
  cursor: pointer;
}

#content {
  background-color: #F1F2F6;
  border: solid 1px black;
  padding: 1%;
  transform: translateY(10%);
  width: 80%;
  margin: auto;
  border-radius: 20px;
}

#content input {
  border-radius: 20px;
  padding: 0.5em;
  border: 0.1em solid;
}

textarea {
  border-radius: 20px;
  padding: 0.5em;
  border: 0.1em solid;
  overflow: hidden;
  padding: 1em;
}
</style>


<template>
  <div id="content">
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <button type="button" class="button">Retour</button>
    </router-link>

    <h1>Editer le film : {{movie.title}}</h1>
    <p>
      Titre :
      <input type="text" v-model="movie.title" />
    </p>

    <p>
      Année :
      <input type="number" v-model="movie.releaseDate" />
    </p>

    <p>
      Réalisateur :
      <input type="text" v-model="movie.director.first_name" />
      <input type="text" v-model="movie.director.last_name" />
    </p>

    <p>
      Synopsis :
      <br />
      <textarea v-model="movie.synopsis" cols="30" rows="10"></textarea>
    </p>
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
