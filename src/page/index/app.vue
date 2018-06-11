<template>
    <div>
        index
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
            console.log(base.webpath);
        }
    };
</script>