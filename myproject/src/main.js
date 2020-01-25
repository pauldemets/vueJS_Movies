import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Edit from './components/Edit'
import Details from './components/Details'
import Rate from './components/Rate'



Vue.use(VueRouter);


Vue.config.productionTip = false

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/', component: Home, name: 'home' },
  { path: '/edit/:id', component: Edit, name: "edittest" },
  { path: '/movie/:id', component: Details, name: "details" },
  { path: '/movie/:id/edit', component: Edit, name: "edit" },
  { path: '/movie/:id/rate', component: Rate, name: "rate" }

]

const router = new VueRouter({
  routes
})

window.shared_data = {
  movies: [
    {
      id: 0,
      title: "La ligne verte",
      releaseDate: 1999,
      language: "English",
      director: {
        first_name: "Frank",
        last_name: "Darabont",
        nationality: "Hongrois",
        birth_date: "28/01/1959",
      },
      synopsis:
        "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain, en 1935, en Louisiane, il était chargé de veiller au bon déroulement des exécutions capitales au bloc E (la ligne verte) en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes.",
      genre: "Dark fantasy",
      rating: null,
      img: "greenmile.png"
    },
    {
      id: 1,
      title: "Gran Torino",
      releaseDate: 2008,
      language: "English",
      director: {
        first_name: "Clint",
        last_name: "Eastwood",
        nationality: "Americain",
        birth_date: "31/05/1930"
      },
      synopsis:
        "Walt Kowalski, un vétéran de la guerre de Corée, raciste et irascible, vient de perdre sa femme. Une nuit, il surprend Thao, un de ses jeunes voisins d'origine Hmong, en train d'essayer de voler sa Ford Gran Torino 1972, dans le cadre d'une épreuve imposée par le gang qui veut le recruter. Cet événement fera évoluer les rapports du jeune homme et sa famille avec M. Kowalski.",
      genre: "Tragedy",
      rating: null,
      img: "grantorino.jpg"
    },
    {
      id: 2,
      title: "Les Évadés",
      releaseDate: 1994,
      language: "English",
      director: {
        first_name: "Frank",
        last_name: "Darabont",
        nationality: "Hongrois",
        birth_date: "28/01/1959"
      },
      synopsis:
        "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
      genre: "Tragedy",
      rating: null,
      img: "lesevades.jpg"
    },
    {
      id: 3,
      title: "Blood Diamond",
      releaseDate: 2007,
      language: "English", 
      director: {
        first_name: "Edward",
        last_name: "Zwick",
        nationality: "Américain",
        birth_date: "08/10/1952"
      },
      synopsis:
        "Alors qu'il purge une peine de prison pour ses trafics, Archer rencontre Solomon Vandy, un pêcheur d'origine Mende. Arraché à sa famille et forcé de travailler dans les mines diamantifères, ce dernier a trouvé - et caché - un diamant rose extrêmement rare. Accompagnés d'une journaliste idéaliste, les deux hommes s'embarquent pour un dangereux voyage en territoire rebelle pour récupérer le fameux caillou.",
      genre: "Tragedy",
      rating: null,
      img: "blooddiamond.jpg"
    },
    {
      id: 4,
      title: "Forrest Gump",
      releaseDate: 1994,
      language: "English", 
      director: {
        first_name: "Robert",
        last_name: "Zemeckis",
        nationality: "Americain",
        birth_date: "14/05/1952"
      },
      synopsis:
        "Au fil des différents interlocuteurs qui viennent s'asseoir tour à tour à côté de lui sur un banc, Forrest Gump raconte la fabuleuse histoire de sa vie. Sa vie est à l'image d'une plume qui se laisse porter par le vent, tout comme Forrest se laisse porter par les événements qu'il traverse dans l'Amérique de la seconde moitié du 20e siècle.",
      genre: "Tragedy",
      rating: null,
      img: "forrestgump.jpg"
    }
  ]
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


