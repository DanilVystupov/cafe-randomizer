<template>
    <div class="container text-center">
        <h1 class="mt-3">Список кафе</h1>
        <CafeList :cafes="cafes" @randomCafeSelected="randomCafeSelected" />
    </div>
</template>
  
<script>
import CafeList from '../components/CafeList.vue';

export default {
    components: {
        CafeList,
    },
    props: {
        cafes: {
            type: Array,
            required: true,
        },
    },
    methods: {
        randomCafeSelected(cafeId) {
            this.$router.push({ name: 'CafeRandomPage', params: { id: cafeId } });
        },
    },
};
</script>
  
<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
  
  
  
