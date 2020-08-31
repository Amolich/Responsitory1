<template>
    <div id="sear_home">
        <img src="../assets/logo.png" height="150" width="150"/>
<!--        <div class = "top2">-->
<!--            <input class="ser" v-model="searchtext" @keyup.enter = "searchbut">-->
<!--            <div class="but" @click="searchbut">搜索</div>-->
<!--        </div>-->
        <search></search>
    </div>
</template>

<script>
    import search from "../components/search";

    export default {
        name: "search_home",
        // data()
        // {
        //     // return {
        //     //     searchtext: ""
        //     // };
        // },
        components:{search},
        methods:
            {
                // async searchbut()
                // {
                //
                //     this.$router.push('/search_result/'+this.searchtext);

                    //           window.location.href="https://www.baidu.com/s?word="+this.searchtext;
                    // await _this.$axios.get("http://localhost:8888/"+this.searchtext)
                    // .then(function (response)
                    // {
                    //     console.log(response);
                    //     this.$router.push('/search_result/'+this.searchtext);
                    // })
                    // .catch(function (error)
                    // {
                    //     console.log(error);
                    // })
                // }
            }
    }
</script>

<style scoped lang="less">

    #sear_home
    {
        display: flex;
        flex: 1;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        img
        {
            margin-bottom: 40px;
        }
    }
</style>
