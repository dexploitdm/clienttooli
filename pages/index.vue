<template>
    <div class="content home">
        <slider/>
        <for-whom/>
        <popular-cat/>
        <card-service title="Рекомендуем" class="desktop"/>
        <card-service title="Лучшие" class="desktop"/>
        <card-service title="Бесплатные" class="desktop"/>
        <card-service title="Новинки и обновления" class="desktop"/>

        <sammlungen class="mobile" />
        <instagram class="mobile" />
    </div>
</template>

<script>
    import Logo from "~/components/Logo.vue";
    import Slider from "~/components/home/Slider.vue";
    import ForWhom from "~/components/home/ForWhom.vue";
    import PopularCat from "~/components/home/PopularCat.vue";
    import CardService from "~/components/base/CardService.vue";
    import Sammlungen from "~/components/home/Sammlungen.vue";
    import instagram from "~/components/home/instagram/index.vue";

    export default {
        components: {
            Logo, Slider, ForWhom, PopularCat, CardService, Sammlungen, instagram
        }
    };
</script>
