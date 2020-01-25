<style scoped>
#title {
  text-align: center;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
  font-size: 2em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
  content: "\2605";
  position: absolute;
  color: #ffd700;
}
.button {
  width: max-content;
  padding: 1em;
  border-radius: 100%;
  border: 2px solid black;
  background-color: #056BB3;
  font-weight: bold;
  color:white;
}

.button:hover {
  opacity: 0.6;
  cursor: pointer;
}

#buttonValidate {
  margin: 0 auto;
  display: block;
  margin-top: 5%;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>

<template>
  <div>
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <button type="button" class="button">Retour</button>
    </router-link>

    <h1 id="title">Noter le film : {{movie.title}}</h1>

    <div class="rating">
      <span @click="onStarClick" id="5">☆</span>
      <span @click="onStarClick" id="4">☆</span>
      <span @click="onStarClick" id="3">☆</span>
      <span @click="onStarClick" id="2">☆</span>
      <span @click="onStarClick" id="1">☆</span>
    </div>

    <router-link v-if="rate != null" :to="{ name: 'details', params: { id: movie.id }}">
      <button type="button" class="button" id="buttonValidate" v-on:click="sendRate">Noter</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: {
    msg: String,
    rate: Number
  },
  methods: {
    onStarClick(event) {
      this.resetStyle();
      for (let index = 1; index <= event.target.id; index++) {
        document.getElementById(index).style.color = "#ffd700";
      }
      this.rate = event.target.id;
      console.log(this.rate);
    },
    resetStyle() {
      var spans = document.getElementsByTagName("span");
      spans.forEach(span => {
        span.style.color = "black";
      });
    },
    sendRate() {
      window.shared_data.movies[this.$route.params.id].rating = this.rate;
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
