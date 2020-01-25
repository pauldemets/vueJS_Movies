<style scoped>
.button {
  width: max-content;
  padding: 1em;
  border-radius: 20px;
  vertical-align: middle;
  border: 2px solid black;
  background-color: #056BB3;
  margin-left: 3%;
  color:white;
  right: 100%;
  font-weight: bold;

}

.button:hover {
  opacity: 0.6;
  cursor: pointer;
}
</style>

<template>
  <div>
    {{movie.title}} ({{movie.releaseDate}})
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <button type="button" class="button">Détails</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object
  },
  methods: {}
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
