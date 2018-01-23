<template>
    <div>
        <ul>
            <li v-for="item in list">
                {{ item.shortTitle }}
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from "vue";
    import App from './app';
    import axios from "axios";
    import '../../css/base.css';
    import '../../css/index.css';
    const api = "/api/list.json";

    export default {
        data() {
            return {
                list: []
            };
        },
        computed: {},
        methods: {
            fetchData() {
                axios.get(api)
                        .then(response => {
                            if (response.status != 200) return;
                            response.data.code == 10000 && (this.list = response.data.data.newsList);
                        }).catch( err => {});
            }
        },
        components: {},
        created() {
            this.fetchData();
        },
        mounted() {
            console.log(1,this.$route.params.userId);
        }
    };
</script>