<template>
  <a :href="url" target='_blank' class="btn text-left rounded-0 p-3">
    <div class='d-flex justify-content-between'>
      <span>{{ text }}</span>
      <span class="fa fa-angle-right"></span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ArrBtn',
  props: {
    text: {
      default: '按鈕文字'
    },
    url: {
      default: '#'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .btn
    display: block
</style>
