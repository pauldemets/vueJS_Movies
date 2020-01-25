<template>
  <div>
    <div id="searchBar">
      <h4>Rechercher :</h4>
      <input type="text" name value placeholder="Titre" v-model="searchTitle" />
      <input type="text" name value placeholder="Année de sortie" v-model="searchYear" />
      <input type="text" name value placeholder="Réalisateur" v-model="searchDirector" />
    </div>

    <br />
    <movies
      v-for="m of filteredList"
      v-bind:movie="m"
      v-bind:key="m.title"
      v-on:deletedmovie="deleteMovie"
      v-on:newmoviename="editMovie"
    ></movies>
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
      searchTitle:"",
      searchYear:"",
      searchDirector :""
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
          m.director
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
