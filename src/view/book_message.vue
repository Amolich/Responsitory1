<template>
    <div id="book_m">
        <Background></Background>
        <search></search>
        <book_mview :book="book"></book_mview>
    </div>
</template>

<script>
    import Background from "../components/background";
    import search from "../components/search";
    import book_mview from "../components/book_mview";
    export default {
        name: "book_message",
        components:{search,Background,book_mview},
        data()
        {
            return {
                book : null,
                page : 1
            };
        },
        computed:{
            dynamicSegment()
            {
                return this.$route.params.id
            }
        },
        methods:
            {
                search_click(text)
                {
                    this.$router.push('/search_result/'+text);
                }
            },
        beforeMount()
            {
                var _this = this;
                console.log("type: "+typeof (_this.$route.params.id) + " " + _this.$route.params.id);
                console.log("http://"+_this.$store.state.Host+":9000/springboot/getUserByGet?text="+_this.$route.params.id+"&range=4");
                this.$axios.get("http://"+_this.$store.state.Host+":9000/springboot/getUserByGet?text="+_this.$route.params.id+"&range=4"+"&page="+this.page+"&each_page="+1)
                    .then(function (response)
                    {
                        console.log(response);
                        _this.book = response.data[0];
                        console.log(_this.book);
                        //    _this.$router.push('/search_result/'+_this.$route.params.word);
                    })
                    .catch(function (error)
                    {
                        console.log(error);

                    })
            }
    }
</script>

<style scoped lang="less">
    #book_m
    {
        display: flex;
        flex: 1;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

</style>
