<template>
  <div class="card my-3 border-0 p-3">
    <h3 class=''>{{ storeName }}</h3>
    <h5 class="addr my-3">{{ addr}}</h5>
    <a href="#" type='tel'>{{tel}}</a>
  </div>
</template>

<script>
import ArrBtn from './ArrBtn'

export default {
  name: 'PharmacyCard',
  props: ['storeName', 'addr', 'tel'],
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
