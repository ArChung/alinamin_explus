<template>
  <div class="card my-3">
    <img :src="img" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title font-weight-bold">{{ storeName }}</h4>
    </div>
    <div class="card-footer p-0">
      <arr-btn :text='"全台據點"' :url='url' class='btn-light'></arr-btn>
    </div>
  </div>
</template>

<script>
import ArrBtn from './ArrBtn'

export default {
  name: 'ChannelCard',
  props: ['storeName', 'img', 'url'],
  components: {
    ArrBtn
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
</style>
