<template>
  <div>
    <div v-if="loading" class="d-flex justify-content-center align-items-center loader-container">
      <div class="spinner-border text-primary spinner-border-xl" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <router-view :cafes="cafes"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cafes: [],
      loading: true,
    };
  },
  methods: {
    async fetchCafes() {
      try {
        const response = await fetch('https://bandaumnikov.ru/api/test/site/get-index');
        const data = await response.json();
        this.cafes = data.data;
        this.loading = false;
      } catch (error) {
        console.error('Ошибка при загрузке кафе:', error.message);
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchCafes();
  },
};
</script>

<style>
.loader-container {
  height: 100vh;
}
</style>