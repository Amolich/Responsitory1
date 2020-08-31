
<template>
    <div id = "page_c" >
        <div class="page_innner_sx" v-if="page > 1" @click="change(page-1)">&lt;上一页</div>
        <div class="page_innner" v-for="c in page_computed" :key="c" @click="change(c)">{{c}}</div>
        <div class="page_innner_sx" v-if="page < count" @click="change(page+1)">下一页&gt;</div>
        <div v-if="count == 0">查无此书</div>
    </div>
</template>

<script>
    export default {
        name: "page_changer",
        data()
        {
            return {
                count : 0, //总页数
                page : 1,  //当前页数
                low : 1
            };
        },
        computed:
        {
            page_computed:function ()
            {
              let low,high
              let arr = []

                if(this.page+4 >= this.count && this.page-4 >= 1)
                {
                  low = this.count-8
                  high = this.count
                }
                else if(this.page > 4 && this.count >= 9)
                {
                  low = this.page - 4
                  high = (low + 8)%(this.count+1)
                }
                else
                {
                  low = 1
                  high = Math.min(this.count,9)
                }
                this.low = low;
              for (let i = low; i <= high; i++)
              {
                arr.push(i)
              }
                return arr
            }
        },
        props: ['command','each_page'],
        methods:
        {
            change(p)
            {
                this.chose_css(this.page-this.low+1,0);
                this.page = p;
                this.chose_css(p-this.low+1,1);
                this.$emit('page_change',p);
            },
            chose_css(p,st)
            {
                let chose = document.getElementsByClassName("page_innner")[p-1];
                if(st == 1)
                {
                    chose.style.background = "black";
                    chose.style.color = "white";
                }
                else
                {
                    chose.style.background = "#cccccc";
                    chose.style.color = "black";
                }
            }
        },
      //"http://"+_this.$store.state.Host+":9000/springboot/getCountByGet?text="+this.$route.params.word+"&range="+this.$route.params.range
        async mounted()
        {
            let _this = this;
            await this.$axios.get(_this.command)
            .then(function (response)
            {
                _this.count = Math.ceil(response.data/_this.each_page);
              console.log("记录总数:"+response.data+"  页数:"+ _this.count);
                _this.count = Number(_this.count);

            })
            .catch(function (error)
            {
                console.log(error);
            })
            if(_this.count == 0)
                _this.page=0;
            else
                this.chose_css(1,1);
        }
    }
</script>

<style scoped lang="less">
     #page_c
     {
         width: 960px;
         height: 50px;
         background: transparent;
       //  margin:20px 50px ;

         display: flex;
         justify-content: flex-start;
         align-items: center;
         flex: 0;
     }
    .page_innner
    {
        width: 30px; height: 30px;
        margin: 10px 10px;
        background: #cccccc;
        color: black;
        font: bold 12px 黑体;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        cursor: pointer;
    }
    .page_innner:hover
    {
        background: black !important;
        color: white !important;
    }
    .page_innner_sx
    {
        width: 60px; height: 30px;
        margin: 10px 10px;
        background: #cccccc;
        font: bold 12px 黑体;
        color: black;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        cursor: pointer;
    }
     .page_innner_sx:hover
     {
         background: black;
         color: white;
     }
</style>
