<template>
    <div class="tab">
        <router-link :to="{ name: 'axios', params: { userId: 123 }}">AXIOS</router-link>
        <router-link :to="{ name: 'axiosAll', query: { userId: 123, page: 34 }}">AXIOSALL</router-link>

    </div>
</template>

<script type="text/ecmascript-6">
    import '../../css/base.css';
    import '../../css/index.css';


    import Vue from "vue";
    import util from "../../lib/util";
    import { BaseWxSahre, wxConfig, wxShare } from "../../lib/wx";
    import { stat, bdtag } from "../../lib/stat";

    const config = CONFIG;
    Vue.use(util);

    export default {
        data() {
            return {};
        },
        computed: {
//      计算
            lineWidth() {
                return {width: this.time + "%"};
            }
        },
        methods: {
//      方法
        },
        components: {
//       组件的绑定
        },
        created() {
        },
        mounted() {
        }
    };
</script>