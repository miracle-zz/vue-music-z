<template>
  <div class="findSwiper">
    <div class="container">
      <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="slideList.length">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a href>
              <img :src="item.imageUrl" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'findSwiper',
  props: {
    slideList: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: 'coverflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang='scss'>
@import 'assets/scss/base.scss';
// .findSwiper {
//   .container {
//     .wrapper {
//     }
//   }
// }
</style>
