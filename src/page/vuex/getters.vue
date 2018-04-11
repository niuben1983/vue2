<template>
    <div>
        {{ count }}
        <button @click="addCount">增加doneTodosCount</button>
        {{ max }} {{ doneTodosCount }}
        <button @click="removeCount">减少doneTodosCount</button>
        {{ age }}
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from "vue";
    import { mapState, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                num: 0
            };
        },
        computed: {
            ...mapState({
                age: state => state.age,
                count: 'count'
            }),
            max () {
                return this.$store.getters.doneTodosCount;
            },
            ...mapGetters({
                doneTodosCount: 'doneTodosCount'
            })
        },
        methods: {
            addCount() {
                this.$store.commit('addTodos', {id: this.num++});
            },
            removeCount() {
                this.$store.commit('delTodos');
            }
        },
        components: {},
        created() {
        },
        mounted() {
        }
    };
</script>