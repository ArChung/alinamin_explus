<template>
    <div id='store' class='p-3'>
      <h1>store</h1>
      <swiper :options="swiperOption" id='pycialStores'>
        <swiper-slide v-for='(store,index) in pycialStores' :key='index'>
          <ChannelCard
            :storeName='store.name'
            :url='store.url'
            :img='store.img'>
          </ChannelCard>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <swiper :options="swiperOption" id='pycialStores'>
        <swiper-slide v-for='(store,index) in pharmacyStores' :key='index'>
          <pharmacy-card
            :storeName='store.name'
            :addr='store.addr'
            :tel='store.tel'>
          </pharmacy-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import ChannelCard from './ChannelCard'
import PharmacyCard from './PharmacyCard.vue'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Store',
  components: {
    ChannelCard,
    PharmacyCard,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      },
      pycialStores: [
        {
          name: '屈臣氏',
          img: 'static/images/demo.png',
          url: 'https://dummyimage.com/'
        },
        {
          name: '大樹藥局',
          img: 'static/images/demo.png',
          url: 'https://dummyimage.com/'
        },
        {
          name: 'Tomod\'s',
          img: 'static/images/demo.png',
          url: 'https://dummyimage.com/'
        },
        {
          name: 'storeName',
          img: 'static/images/demo.png',
          url: 'https://dummyimage.com/'
        },
        {
          name: 'storeName',
          img: 'static/images/demo.png',
          url: 'https://dummyimage.com/'
        }
      ],
      pharmacyStores: [
        {
          name: '屈臣氏2',
          addr: '地址地址地址地址地址地址地址地址',
          tel: '02-29123456'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .card-deck
    .card
      // flex: 0 0 30%
  .swiper-container
    height: auto!important
    margin-left: auto
    margin-right: auto

  .swiper-slide
    height: auto
</style>
