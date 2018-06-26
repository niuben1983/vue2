<template>
    <div>
        <ul>
            <li v-for="item in list">
                {{ item.title }} {{ item.locked }} {{ item.count }} {{ item.id }}
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
    import { getTodoList, addTodo } from '../../api/api';

    export default {
        data() {
            return {
                list: []
            };
        },
        computed: {},
        methods: {
            fetchData() {
                getTodoList({}).then(res => {
                    const TODOS = res.data.todos; // 数据都会返回在res.data里面。
                    this.list = TODOS;
                });
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