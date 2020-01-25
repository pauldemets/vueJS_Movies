<style scoped>
#searchBar {
  text-align: center;
  border: 0.1em solid;
  width: max-content;
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4%;
  border-radius: 20px;
  background-color: #cce0ff;
}

#searchBar > input {
  border-radius: 20px;
  padding: 0.5em;
  border: 0.1em solid;
  margin-right: 1em;
  text-align: center;
}

.movieItem {
  background-color: #F1F2F6;
  border: solid 1px black;
  padding: 1%;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  display: block;
  border-radius: 20px;
  margin-top: 2em;
}

#moviesList {
  border: 0.2em solid;
  padding: 2%;
  width: 80%;
  margin: auto;
  background-color: #cce0ff;
  border-radius: 20px;
}
*:first-child {
  margin-top: 0;
}


</style>

<template>
  <div>
    <div id="searchBar">
      <h4>Rechercher :</h4>
      <input type="text" name value placeholder="Titre" v-model="searchTitle" />
      <input type="text" name value placeholder="Année de sortie" v-model="searchYear" />
      <input type="text" name value placeholder="Réalisateur" v-model="searchDirector" />
    </div>

    <div id="moviesList">
      <movies
        v-for="m of filteredList"
        v-bind:movie="m"
        v-bind:key="m.title"
        v-on:deletedmovie="deleteMovie"
        v-on:newmoviename="editMovie"
        class="movieItem"
      ></movies>
    </div>
  </div>
</template>

<script>
import Item from "./MovieItem";

export default {
  name: "app",
  components: {
    movies: Item
  },
  data: function() {
    return {
      movies: window.shared_data.movies,
      searchTitle: "",
      searchYear: "",
      searchDirector: ""
    };
  },
  methods: {
    removeElement(index) {
      this.movies.splice(index, 1);
    },
    refreshInfosView(index) {
      this.movies[index].displayInfos = !this.movies[index].displayInfos;
    },
    deleteMovie: function(m) {
      for (var i = 0; i < this.movies.length; i++) {
        if (this.movies[i] == m) {
          this.movies.splice(i, 1);
        }
      }
    },
    editMovie: function(m, newname) {
      m.title = newname;
    }
  },
  computed: {
    filteredList() {
      return this.movies.filter(m => {
        return (
          m.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
          m.director.last_name
            .toLowerCase()
            .includes(this.searchDirector.toLowerCase()) &&
          m.releaseDate.toString().startsWith(this.searchYear.toString())
        );
      });
    }
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
