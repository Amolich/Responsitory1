<template>
    <div>
      <home__page_c  @page_change="page_change($event,page)"></home__page_c>
      <div v-if="this.page == 1">
        <Background></Background>
        <Search_home class="sea"></Search_home>
      </div>
      <div v-else>
        <mange_choser></mange_choser>
      </div>
    </div>
</template>

<script>
    import Background from "../components/background";
    import Search_home from "../components/search_home";
    import home__page_c from '../components/admin/home__page_c'
    import mange_choser from '../components/admin/mange_choser'
    export default {
        name: "home",
        components: {Search_home,Background,home__page_c,mange_choser},
        data()
        {
          return {
            page : 1,
            ans : null
          };
        },
      methods:
        {
          page_change(p)
          {
            this.page = p;
          }
        }
    }
</script>

<style scoped>
    .sea
    {
        position: absolute;
        left: 30%;
        top: 15%;
    }
    .wea
    {
        right: 150px;
        top: 10px;
    }
</style>
