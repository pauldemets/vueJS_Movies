<template>
<div>{{movie.title}} ({{movie.releaseDate}}) <input type="text" ref="editinput">
<button type="button" v-on:click="edit">edit</button>
<button type="button" v-on:click="deletemovie">delete</button>
<router-link :to="{ name: 'edit', params: { id: movie.id }}">go to edit ...</router-link>


</div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: Object
  },
  methods: {
    deletemovie() {
      this.$emit("deletedmovie",this.movie);
    },
    edit() {
       this.$emit("newmoviename",this.movie, this.$refs.editinput.value);
     }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
