<template>
  <div id="app flex justify-center items-center">
    <SuggestionList />

    <!-- <div class="identification">
			<div class="primary">brielarson</div>
			<div class="secondary">Brie Larson</div>
			<div class="tertiary">Follows You?</div>
		</div> -->

    <!-- <button class="button" @click="follow">Follow</button> -->
  </div>
</template>

<script>
import SuggestionList from './components/SuggestionList'
import Fetch from './components/Fetch'

export default {
  components: {
    SuggestionList,
    Fetch,
  },
  computed: {
    suggestions() {
      return this.$store.suggestions
    },
  },
}
</script>

<style>
.button {
  background-color: #3897f0;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
}

.identification {
  margin-left: 20px;
}

.primary {
  font-weight: 700;
}

.secondary {
  margin-top: 5px;
  color: lightslategray;
}

.tertiary {
  margin-top: 5px;
  color: lightslategray;
  font-size: 14px;
}
</style>
