<template>
  <div id="app">
    <nav_bar></nav_bar>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>

import nav_bar from './components/nav_bar'
export default {
    name: 'App',
    components: { nav_bar
    },
    provide(){
        return{
            reload: this.reload
        };
    },
    data()
    {
        return {
            isRouterAlive : true
         };
    },
    methods:
        {
            reload()
            {
                this.isRouterAlive = false;
                this.$nextTick(function ()
                {
                   this.isRouterAlive = true;
                })
            }
        }
}
</script>

<style>
#app {

}
</style>
