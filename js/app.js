new Vue({
    el: "#app",
    data: {
        blog: false,
    },
    methods: {
        toggleBlog: function() {
            if (this.blog) {
                this.blog = false;
            }
            else {
                this.blog = true;
            }
        },
        handleScroll: function() {
            if (!this.blog) {
                this.blog = true;
            }
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});
