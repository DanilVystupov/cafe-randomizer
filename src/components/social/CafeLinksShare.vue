<template>
    <div class="d-flex justify-content-center m-2">
        <div v-if="selectedCafeButton" :key="selectedCafeButton.name">
            <button @click="copyToClipboard(selectedCafeButton.link)" class="btn btn-outline-dark">
                <i class="fa fa-copy fa-lg"></i>
            </button>
            <a :href="getVKShareLink(selectedCafeButton.link)" class="btn btn-outline-primary m-2">
                <i class="fab fa-vk fa-lg" style="color: #1f99e5;"></i>
            </a>
            <a :href="getTelegramShareLink(selectedCafeButton.link)" class="btn btn-outline-info">
                <i class="fa fa-paper-plane fa-lg"></i>
            </a>
        </div>
    </div>
</template>
  
<script>
import Clipboard from 'clipboard';

export default {
    props: {
        cafe: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            cafeButtons: [
                {
                    name: 'Барвинок',
                    link: 'https://go.2gis.com/6f3uk8',

                },
                {
                    name: 'Дед Хо',
                    link: 'https://go.2gis.com/rb33t',
                },
                {
                    name: 'Синичка',
                    link: 'https://go.2gis.com/8btr9',
                },
                {
                    name: 'Хачапури и вино',
                    link: 'https://go.2gis.com/ritjx',
                },
                {
                    name: 'Паруса на крыше',
                    link: 'https://go.2gis.com/7pagl',
                },
                {
                    name: 'Ramen Slurp Bar',
                    link: 'https://go.2gis.com/uo1yl',
                },
                {
                    name: 'Лукоморье',
                    link: 'https://go.2gis.com/sw78p',
                },
                {
                    name: 'Civil',
                    link: 'https://go.2gis.com/jxj80',
                },
                {
                    name: 'Futura',
                    link: 'https://go.2gis.com/3zu9v',
                },
                {
                    name: 'Pan and cake',
                    link: 'https://go.2gis.com/i13mr',
                },
                {
                    name: 'Каха бар',
                    link: 'https://go.2gis.com/nbgnh',
                },
                {
                    name: 'Буше',
                    link: 'https://go.2gis.com/4oujo',
                },
                {
                    name: 'Люди любят',
                    link: 'https://go.2gis.com/2lgt7',
                },
                {
                    name: 'Теремок',
                    link: 'https://go.2gis.com/cu48j',
                },
                {
                    name: 'Coffee Room',
                    link: 'https://go.2gis.com/3squb',
                },
                {
                    name: 'Crispy pizza',
                    link: 'https://go.2gis.com/90lio',
                },
                {
                    name: 'Akiba Ramen',
                    link: 'https://go.2gis.com/lk168',
                },
                {
                    name: 'Coffee-3',
                    link: 'https://go.2gis.com/u068ml',
                },
                {
                    name: 'Чебуреки и рюмочная у Ларисы',
                    link: 'https://go.2gis.com/ah2wd',
                },
                {
                    name: 'Толстый Фраер',
                    link: 'https://go.2gis.com/kvgcjf',
                },
                {
                    name: 'Брынза',
                    link: 'https://go.2gis.com/us7bra',
                },
                {
                    name: 'Bad jib',
                    link: 'https://go.2gis.com/ah80kv',
                },
                {
                    name: 'Жизнь Март',
                    link: 'https://go.2gis.com/18ha0',
                },
            ],
        };
    },
    computed: {
        selectedCafeButton() {
            return this.cafeButtons.find(cafeButton => cafeButton.name === this.cafe.name);
        },
    },
    methods: {
        copyToClipboard(text) {
            const clipboard = new Clipboard('.btn-outline-dark', {
                text: () => text,
            });

            clipboard.on('success', () => {
                alert('Ссылка скопирована в буфер обмена!');
                clipboard.destroy();
            });

            clipboard.on('error', () => {
                alert('Не удалось скопировать ссылку. Попробуйте снова.');
                clipboard.destroy();
            });
        },
        getVKShareLink(link) {
            const encodedLink = encodeURIComponent(link);
            return `https://vk.com/share.php?url=${encodedLink}`;
        },
        getTelegramShareLink(link) {
            const encodedLink = encodeURIComponent(link);
            return `https://t.me/share/url?url=${encodedLink}`;
        },
    },
};
</script>
  
<style></style>