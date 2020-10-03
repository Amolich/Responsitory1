<template>

    <div class="top">
        <div class = "top2">
            <input class="ser" v-model="searchtext" @keyup.enter = "searchbut">
                <div class="but" @click="searchbut">搜索</div>
        </div>
        <div class="top1">
            <input type="radio" name="range" value="1" v-model="radio">按名称
            <input type="radio" name="range" value="2" v-model="radio">按作者
            <input type="radio" name="range" value="3" v-model="radio">按出版社
            <input type="radio" name="range" value="5" v-model="radio">按书号
        </div>

    </div>
</template>

<script>
    import {isBlank,trim} from "../class/obj_judge";

    export default {
        name: "search",
        data()
        {
            return {
                searchtext: "",
                radio: '1'
            };
        },
        methods:
        {
            async searchbut()
            {
            //    var _this = this;
              this.searchtext = trim(this.searchtext);
              this.searchtext = this.common.filterXSS(this.searchtext);
              if(isBlank(this.searchtext))
                {
                    await this.$router.push('/blank');
                    await this.$router.push('/home');
                }
                else
                {
                    await this.$router.push('/blank');
                    await this.$router.push('/search_result/'+this.searchtext+'/'+this.radio);
                }
            }
        },
        beforeMount()
        {
            this.searchtext = this.$route.params.word;
            if(this.$route.params.range)
                this.radio = this.$route.params.range;
        }
    }
</script>

<style scoped lang="less">

    .top
    {
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .top1
    {
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
        input
        {
            margin-left:30px;
        }
    }
    .top2
    {
       //     inline-size: 25px;
            background: deepskyblue;
            height: 31px;
            border-radius: 10px;

            float: left;

            .ser
            {
                width: 500px; height: 25px;

                display: inline-block;
                border: 2px solid deepskyblue;
                border-radius: 10px;
                outline: none;

                padding-left: 10px;
            };
            .but
            {
                width: 40px; height: 25px;
                display: inline-block;
                font:normal bold 16px 黑体;
                color: white;
                background: deepskyblue;
                border-radius: 10px;
                cursor: pointer;
            };

    }
</style>
