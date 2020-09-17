<template>
    <div id="sea_res">
        <Background></Background>
        <div class="out_sear">
            <search class="sea"></search>
         </div>
        <div class="wid960">
            <book_view v-for="(item,i) in books" :key="i" :book="item"></book_view>
        </div>
        <page_changer :command="this.pg_com" :each_page="this.each_page" @page_change="page_change($event,page)"></page_changer>
    </div>
</template>

<script>
    import book_view from "../components/book_view";
    import search from "../components/search";
    import Background from "../components/background";
    import page_changer from "../components/page_changer";
    export default {
        name: "search_result",
        data()
        {
            return {
                books : null,
                page : '1',
                pg_com: null,
                each_page: 5
            };
        },
        components: {book_view,search,Background,page_changer},
        computed: {

        },
        inject:['reload'],
        methods:
        {
            page_change(p)
            {
                this.page = p;
                this.get_book();
            },
            get_book()
            {
                var _this = this;
                this.$axios.get("http://"+_this.$store.state.Host+":9000/springboot/getUserByGet?text="+_this.$route.params.word+"&range="+_this.$route.params.range+"&page="+(_this.page-1)*5+"&each_page="+_this.each_page)
                    .then(function (response)
                    {
                        _this.books = response.data;
                        console.log(_this.books);

                        let s = _this.$route.params.word;
                        let reg = new RegExp("(" + s + ")", "g");
                        for (var key in _this.books)
                        {
                          _this.books[key].name = _this.books[key].name.replace(reg, "<font  color=red>$1</font>");
                          _this.books[key].author = _this.books[key].author.replace(reg, "<font color=red>$1</font>");
                          _this.books[key].bookConcern = _this.books[key].bookConcern.replace(reg, "<font color=red>$1</font>");
                        }

                        //    this.$router.push('/search_result/'+this.$route.params.word);
                    })
                    .catch(function (error)
                    {
                        console.log(error);

                    })
            }
        },
        beforeMount()
        {
            this.get_book();
            this.pg_com = "http://"+this.$store.state.Host+":9000/springboot/getCountByGet?text="+this.$route.params.word+"&range="+this.$route.params.range;
          console.log(this.pg_com);
        }
    }
</script>

<style scoped lang="less">
    #sea_res
    {

        display: flex;
        flex: 1;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        width: 1333px;

    }
    .out_sear
    {
        /*display: flex;*/
        /*flex: 1;*/
        /*flex-direction:column;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    }
    .sea
    {
        margin: 30px 0;
    }
    .wid960
    {
        width: 960px;

        display: flex;
        flex: 1;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    book_view
    {

    }
</style>
