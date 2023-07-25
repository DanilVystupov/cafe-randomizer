<template>
    <div class="card mb-3">
        <img v-if="cafe.photo" :src="cafe.photo" class="card-img-top" alt="Cafe Image">
        <div class="card-body">
            <h5 class="card-title">Название: {{ cafe.name }}</h5>
            <p v-if="cafe.address" class="card-text">Адресс: {{ cafe.address }}</p>
            <p v-if="cafe.cuisine" class="card-text">Кухня: {{ cafe.cuisine }}</p>
            <p v-if="cafe.cuisine" class="card-text">Расстояние: {{ cafe.distance }} метров</p>
            <p v-if="cafe.cuisine" class="card-text">Как далеко идти: {{ cafe.time }} минут</p>
            <p v-if="cafe.business_lunch" class="card-text">Бизнес ланч: {{ cafe.price }}₽</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        cafe: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style>
.card {
    width: 30%;
    margin: 0 auto;
}

.card-img-top {
    height: 400px;
    object-fit: cover;
}

@media screen and (max-width:1000px) {
    .card {
        width: 45%;
    }
}

@media screen and (max-width:760px) {
    .card {
        width: 100%;
    }

    .card-img-top {
        height: 350px;
    }
}

@media screen and (max-width:400px) {
    .card-img-top {
        height: 250px;
    }
}
</style>