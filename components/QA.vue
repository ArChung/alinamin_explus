<template>
  <div id="qaWrap" class='p-3'>
    <div class="qaBox my-3" v-for='(qa,index) in qas' :key='index'>
      <div class="card question" data-toggle="collapse" :data-target="'#collapse'+index">
        <div class="card-body">
          <span class="qaNum">Q{{ index }}</span>
          <span class="text">{{ qa.q }}</span>
          <span class="fa fa-angle-down"></span>
        </div>
      </div>
      <div :id="'collapse'+index" class="collapse answer" data-parent="#qaWrap">
        <div class="card border-0 answer">
          <div class="card-body">
            {{ qa.a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: 1,
      qas: [
        {
          q: 'question1',
          a: 'answer1'
        },
        {
          q: 'question2',
          a: 'answer2'
        },
        {
          q: 'question3',
          a: 'answer3'
        }
      ]
    }
  },
  mounted () {
    $('#qaWrap').on('show.bs.collapse', '.answer', function (e) {
      console.log($(e.currentTarget).closest('.qaBox').toggleClass('open'))
    })

    $('#qaWrap').on('hide.bs.collapse', '.answer', function (e) {
      console.log($(e.currentTarget).closest('.qaBox').toggleClass('open'))
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .fa
    transition-duration: .3s
  .qaBox
    &.open
      .fa
        transform: rotate(180deg)
    .fa-angle-down
      font-size: 2rem
      float: right

</style>
