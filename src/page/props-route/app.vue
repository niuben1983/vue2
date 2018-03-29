<template>
    <div class="tab">
    
        <button @click="routeParent()">emit</button>
    
    </div>
</template>

<script type="text/ecmascript-6">
    import '../../css/base.css';
    import '../../css/index.css';
    
    export default {
        data () {
            return {
                count: 0
            }
        },
        methods: {
    
            routeParent() {

                this.$root.$emit('receive', this.count++);
            }
    
        },
        created () {
        },
    
        components: {
            //       组件的绑定
        }
    
    };
</script>