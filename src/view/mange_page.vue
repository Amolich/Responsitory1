<template>
  <div id="m_p">
    <top_btn :text="'首页'"></top_btn>
    <search_edit :range="this.range" :word="this.word" @search_text_change="search_text_change"></search_edit>
    <mange :books="this.books" :page="this.page" @get_book="get_book($event)"></mange>
    <page_changer :command="this.pg_com"  :each_page="this.each_page" @page_change="page_change($event,page)"></page_changer>
  </div>
</template>

<script>
  import mange from '../components/admin/mange'
  import page_changer from '../components/page_changer'
  import search_edit from '../components/admin/search_edit'
  import top_btn from '../components/top_btn'
  export default {
    name: 'mange_page',
    components:{mange,page_changer,search_edit,top_btn},
    data()
    {
      return{
        books: null,
        pg_com: "http://"+this.$store.state.Host+":9000/springboot/getCountByGet?text&range=1",
        page: 1,
        word: null,
        range: 0,
        each_page: 10
      }
    },
    methods:
      {
        page_change(p)
        {
        this.page = p;
        this.get_book();
        },
        pg_com_updata()
        {
          this.pg_com="http://"+this.$store.state.Host+":9000/springboot/getCountByGet?text="+this.word+"&range="+this.range;
        },
        search_text_change(w,r)
        {
          this.word = w;
          this.range = r;
          this.pg_com_updata();
          this.get_book();
        },
        get_book()
        {
          var _this = this;
          this.$axios.get("http://"+_this.$store.state.Host+":9000/springboot/getUserByGet?text="+_this.word+"&range="+ _this.range +"&page="+(_this.page-1)*10+"&each_page="+_this.each_page)
            .then(function (response)
            {

              _this.books = response.data;
              console.log(_this.books);

              //    this.$router.push('/search_result/'+this.$route.params.word);
            })
            .catch(function (error)
            {
              console.log(error);

            })
        }
      },
    mounted () {
      this.get_book();
    }
  }
</script>

<style scoped>
  #m_p
  {
    width: 960px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);

    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }
</style>
