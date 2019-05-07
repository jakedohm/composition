<template>
  <div id="app flex justify-center items-center">
    <SuggestionList />

    <SuggestionList>
      <template #name="{ user }">
        <div class="identification">
          <div class="primary">{{ user.username }}</div>
          <div class="secondary">{{ user.name }}</div>
          <div v-if="user.followsMe" class="tertiary">Follows You</div>
        </div>
      </template>

      <template #follow="{ follow }">
        <button class="button" @click="follow">Follow</button>
      </template>
    </SuggestionList>

    <Fetch url="/users.json" v-slot="{ data, loading, error }">
      <div class="w-1/3 mx-auto">
        <div v-if="loading">Loading...</div>

        <div v-else-if="error">Errored!</div>

        <div v-if="data">
          <pre>
            {{ data }}
          </pre>
        </div>
      </div>
    </Fetch>
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
