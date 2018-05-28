<template>
    <div>
        {{ count }}
        <button @click="addCount({id: num++})">增加doneTodosCount</button>
        {{ max }} {{ doneTodosCount }}
        <button @click="removeCount">减少doneTodosCount</button>
        {{ age }}
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from "vue";
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
            ...mapMutations({
                // addCount: 'addTodos',
                removeCount: 'delTodos'
            }),
            ...mapActions({
                addCount: 'increment'
            })
        },
        components: {},
        created() {
        },
        mounted() {
        }
    };
</script>