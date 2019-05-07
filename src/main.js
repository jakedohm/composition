import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const store = Vue.observable({
  following: [],
  suggestions: [
    {
      name: 'Robert Downey Jr.',
      username: 'robertdowneyjr',
      verified: true,
      followsMe: false,
      image: 'rdj.jpg',
    },
    {
      name: 'Brie Larson',
      username: 'brielarson',
      verified: true,
      followsMe: true,
      image: 'brie.jpg',
    },
    {
      name: 'Chris Hemsworth',
      username: 'chrishemsworth',
      verified: true,
      followsMe: true,
      image: 'chris.jpg',
    },
    {
      name: 'Danai Gurira',
      username: 'danaigurira',
      verified: true,
      followsMe: false,
      image: 'danai.jpg',
    },
  ],
})

const actions = {
  followUser(username) {
    // Add to following
    store.following.push('')

    // Remove from suggestions
    const newSuggestions = store.suggestions.filter(
      item => item.username !== username
    )
    store.suggestions = newSuggestions
  },
}

Vue.prototype.$store = store
Vue.prototype.$actions = actions

new Vue({
  render: h => h(App),
}).$mount('#app')
