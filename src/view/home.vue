<template>
    <div @click="test">
      <top_btn :text="'首页'"></top_btn>
      <home__page_c  @page_change="page_change($event,page)"></home__page_c>
      <div v-if="this.page == 1">
        <Background></Background>
        <Weather class ="wea"></Weather>
        <Search_home class="sea"></Search_home>
      </div>
      <div v-else>
        <mange_choser></mange_choser>
      </div>
    </div>
</template>

<script>
    import Background from "../components/background";
    import Weather from "../components/weather";
    import Search_home from "../components/search_home";
    import home__page_c from '../components/admin/home__page_c'
    import mange_choser from '../components/admin/mange_choser'
    import top_btn from '../components/top_btn'
    export default {
        name: "home",
        components: {Search_home, Weather,Background,home__page_c,mange_choser,top_btn},
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
          },
          test()
          {
            var L="一二三四五六七八九十"
            var N= 3
            var ans = ""
            var count = 0
            if(L.length <= N)
            {
              ans = L.substring(0,N);
            }
            else
            {
              for (var i = 0;count < N-3; i++)
              {
                var charCode = L.charAt(i);
                var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if (!reg.test(charCode))
                {
                  ans = ans + charCode
                  count += 1
                }
                else
                {
                  ans = ans + charCode
                  count += 2
                }

              }
              if(count > N-3)
                ans = ans.substr(0, ans.length - 1);
              ans = ans+"..."
            }
            alert(ans)
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
