<template>
    <div>
        <div>
            <button @click="redirectToRandomCafePage" class="btn btn-outline-success mb-3">
                Выбрать случайное кафе
            </button>
        </div>
        <div class="d-flex flex-wrap justify-content-between">
            <CafeItem v-for="cafe in cafes" :key="cafe.id" :cafe="cafe" />
        </div>
    </div>
</template>
  
<script>
import CafeItem from './CafeItem';

export default {
    components: {
        CafeItem,
    },
    props: {
        cafes: {
            type: Array,
            required: true,
        },
    },
    methods: {
        redirectToRandomCafePage() {
            const randomCafeIndex = Math.floor(Math.random() * this.cafes.length);
            const randomCafeId = this.cafes[randomCafeIndex].id;
            this.randomCafeSelected(randomCafeId);
        },
        randomCafeSelected(cafeId) {
            this.$emit('randomCafeSelected', cafeId);
        },
    },
};
</script>


<style></style>

                