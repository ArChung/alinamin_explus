var app = new Vue({
    el: '#app',
    data: {
        showPhoneMenu: false,
        

        

    },
    computed: {
        
    },
    watch: {

    },
    mounted() {
        var that = this;
        window.onscroll = function () {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            if (top > 200) {
                $('#header').addClass('redBg')
            } else {
                $('#header').removeClass('redBg')
            }
        }
    },
    methods: {

    }

})