<template>

  <div class="top">
    <div class = "top2">
      <input class="ser" v-model="searchtext" @keyup.enter = "change_search">
      <div class="but" @click="change_search">搜索</div>
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
  import {isBlank,trim} from "../../class/obj_judge";

  export default {
    name: "search",
    data()
    {
      return {
        searchtext: "",
        radio: '1'
      };
    },
    props:['word','range'],
    methods:
      {
        change_search(p)
        {
          this.$emit('search_text_change',this.searchtext,this.radio);
        }
      },
    beforeMount()
    {
      this.searchtext = this.word;
      if(this.range)
        this.radio = this.range;
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
    margin: 10px;
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
