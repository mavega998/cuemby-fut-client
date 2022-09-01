<template>
    <div class="row justify-content-around">
        <button class="col-1 btn btn-secondary" :class="{ disabled: enablePrev }" @click="prevPage">Prev</button>
        <button class="col-1 btn btn-secondary" :class="{ disabled: enableNext }" @click="nextPage">Next</button>
    </div>
</template>
<script>
export default {
    props: {
        page: {
            type: Number,
            require: true,
            default: 1
        },
        totalPage: {
            type: Number,
            require: true,
            defualt: 1
        }
    },
    data: () => ({
        enablePrev: true,
        enableNext: false
    }),
    watch: {
        page(val) {
            if (val === 1) {
                this.enablePrev = true;
            }
        }
    },
    methods: {
        nextPage() {
            this.enablePrev = false;
            if (this.page < this.totalPage) {
                this.$emit('currentPage', this.page + 1)
            } else {
                this.enableNext = true;
            }
        },
        prevPage() {
            this.enableNext = false;
            if (this.page > 1) {
                this.$emit('currentPage', this.page - 1)
            } else {
                this.enablePrev = true;
            }
        }
    }
}
</script>