<template>
    <div class="nav-item cursor-pointer" :class="{active:active}" @click="handleClick"  >
        <img class="nav-icon" :src="data.icon" />
        <p class="medium-12" >{{data.label}}</p>
    </div>
</template>

<script>
export default {
    name:"NavItem",
    props:{
        data:Object
    },
    methods:{
        handleClick(){
            this.$emit('click',this.data?.action)
        }
    },
    computed:{
        active(){
            if(this.data?.action === this.$route.path){
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-item{
    display: flex;
    height: 100%;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid transparent;
    padding: 12px 0px 8px 0px;
    margin-bottom: 4px;
}
.nav-icon{
    width: 24px;
}
.active{
    border-bottom: 3px solid $DARK_PURPLE;
}
</style>