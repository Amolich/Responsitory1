<template>
    <div id="pgc">
      <div class="tag" @click="change(1)">搜索</div>
      <div class="tag" @click="change(2)">管理</div>
    </div>
</template>

<script>
  export default {
    name: 'home__page_c',
    data()
    {
      return {
        page : 1
      };
    },
    methods:
      {
        change(p)
        {
          this.chose_css(this.page,0);
          this.page = p;
          this.chose_css(p,1);
          this.$emit('page_change',p);
        },
        chose_css(p,st)
        {
          let chose = document.getElementsByClassName("tag")[p-1];
          if(st == 1)
          {
            chose.style.background = "black";
            chose.style.color = "white";
          }
          else
          {
            chose.style.background = "white";
            chose.style.color = "black";
          }
        },
        handleScroll (e) {
          var direction = e.deltaY>0?'down':'up'; //该语句可以用来判断滚轮是向上滑动还是向下
          if(direction == 'down')
          {
            let e = Math.min(this.page+1,2);
            this.change(e);
          }
          else
          {
            let e = Math.max(this.page-1,1);
            this.change(e);
          }
          // if(document.getElementsByTagName("li").length == 1){   //此处决定无论一次滚轮滚动的距离是多少，此事件
          //   //都得等上次滚动结束，才会执行本次
          //   this.isShow = false
          //   setTimeout(() => {
          //     this.isShow = true
          //     ++ this.nowIndex
          //     if(this.nowIndex == 3){
          //       this.nowIndex = 0
          //     }
          //   }, 10)
          // }
        }
      },
    mounted()
    {
      this.change(1);
      window.addEventListener('mousewheel',this.handleScroll,true);
    },
    destroyed() {
      window.removeEventListener("mousewheel", this.handleScroll, true);
    }
  }
</script>

<style scoped lang="less">
  #pgc
  {
    position:absolute;
    right:0px;
    top:50%;
    transform: translate(0,-50%); /*自己的50% */
  }
  .tag
  {
    margin: 7px 0;
    height: 65px; width: 65px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid #888888;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
</style>
