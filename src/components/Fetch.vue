<script>
export default {
  props: ['url'],
  data() {
    return {
      error: false,
      loading: false,
      data: false,
    }
  },
  methods: {
    fetch() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => (this.data = data))
        .catch(error => {
          this.error = error
        })
        .finally(() => (this.loading = false))
    },
  },
  mounted() {
    this.loading = true

    setTimeout(this.fetch, 2000)
  },
  render() {
    // write render function
    return null
  },
}
</script>
