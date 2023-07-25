<template>
    <div class="container text-center">
        <div class="d-inline-block flex-wrap justify-content-center">
            <h1 class="mt-3">Волшебный сервис рекомендует посетить <br /> "{{ cafe.name }}"</h1>
            <div>
                <button @click="$router.push('/')" class="btn btn-outline-danger m-2">
                    Вернуться к списку кафе
                </button>
                <button @click="getRandomCafe" class="btn btn-outline-success">
                    Испытать удачу повторно
                </button>
            </div>
            <CafeLinksShare :cafe="cafe" />
            <CafeItem :cafe="cafe" />
        </div>
    </div>
</template>
  
<script>
import CafeItem from '../components/CafeItem.vue';
import CafeLinksShare from '../components/social/CafeLinksShare.vue';

export default {
    components: {
        CafeItem,
        CafeLinksShare
    },
    props: {
        cafes: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            cafe: null,
        };
    },
    created() {
        const cafeId = localStorage.getItem('selectedCafeId');
        const randomCafeId = localStorage.getItem('randomCafeId');

        if (cafeId) {
            this.getCafeById(cafeId);
        } else if (randomCafeId) {
            this.getCafeById(randomCafeId);
        } else {
            this.getCafeById();
        }
    },
    methods: {
        redirectToCafeList() {
            this.$router.push({ path: '/' });
        },
        getCafeById(cafeId) {
            if (!cafeId) {
                cafeId = this.$route.params.id;
            }
            this.cafe = this.cafes.find(cafe => cafe.id === +cafeId);
            localStorage.setItem('selectedCafeId', cafeId);
        },
        getRandomCafe() {
            const randomCafeId = Math.floor(Math.random() * this.cafes.length);
            localStorage.setItem('randomCafeId', randomCafeId);
            this.getCafeById(randomCafeId);
        },
    },
    beforeUnmount() {
        localStorage.removeItem('selectedCafeId');
        localStorage.removeItem('randomCafeId');
    },
};
</script>
  
<style></style>