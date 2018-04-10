<template>
    <div>
        {{ count }}
        <button @click="addCount">增加count</button>
        {{ max }}
        <button @click="removeCount">减少count</button>
        {{ age }}
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from "vue";
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
            };
        },
        // computed: mapState(
        //     {
        //         age: state => state.age,
        //         count: 'count'
        //     }    
        // ),
        computed: {
            ...mapState({
                age: state => state.age,
                count: 'count'
            }),
            max () {
                return this.$store.state.count + 2;
            }
        },
        methods: {
            addCount() {
                this.$store.commit('increment');
            },
            removeCount() {
                this.$store.commit('outcrement');
            }
        },
        components: {},
        created() {
        },
        mounted() {
        }
    };
</script>