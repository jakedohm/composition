<template>
  <div class="users shadow">
    <div class="user" v-for="(user, index) in suggestions" :key="index">
      <div class="image">
        <img :src="`/images/${user.image}`" :alt="user.name" />
      </div>

      <slot name="name" :user="user">
        <div class="identification">
          <div class="primary">{{ user.username }}</div>
          <div v-if="user.followsMe" class="secondary">Follows You</div>
        </div>
      </slot>

      <div class="follow-outer">
        <slot name="follow" :follow="follow">
          <button class="follow" @click="follow">Follow</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
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
    }
  },
  methods: {
    follow() {
      alert(`Done!`)
    },
  },
}
</script>

<style scoped>
.users {
  width: 33.333%;
  margin: 70px auto;
  padding: 20px 30px;
  border: 1px solid lightslategray;
  border-radius: 5px;
}

.user {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.image > img {
  width: 50px;
  border-radius: 50%;
}

.follows {
  margin-top: 5px;
  font-size: 14px;
  color: lightslategray;
}

.follow-outer {
  margin-left: auto;
}

.follow {
  color: #3897f0;
  font-weight: 700;
}
</style>
