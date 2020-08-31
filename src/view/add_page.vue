<template>
  <div>
    <top_btn :text="'首页'"></top_btn>
    <div id="add_page">
      <div class="cover_big">
        <img src="../assets/logo.png" style="max-width:179px ">
      </div>
      <div class="right_m">
        <div class="row">
          <span>书名:</span>
          <textarea cols="20" rows="1"></textarea>
        </div>
        <div class="row">
          <span>作者:</span>
          <textarea cols="20" rows="1"></textarea>
        </div>
        <div class="row">
          <span>出版社:</span>
          <textarea cols="20" rows="1"></textarea>
        </div>
        <div class="row">
          <span>ISBN:</span>
          <textarea cols="20" rows="1"></textarea>
        </div>
        <div class="row">
          <span>摘要:</span>
          <textarea cols="20" rows="4"></textarea>
        </div>
      </div>
      <div class="add_btn" @click="add_new">
        添加
      </div>
    </div>
  </div>
</template>

<script>
  import top_btn from '../components/top_btn'
  export default {
    name: 'add_page',
    components:{top_btn},
    data()
    {
      return{
        new_book: {}
      }
    },
    methods:
      {
        async add_new()
        {
          let rows = document.getElementsByClassName('row');
          this.new_book.name = rows[0].getElementsByTagName('textarea')[0].value;
          this.new_book.author = rows[1].getElementsByTagName('textarea')[0].value;
          this.new_book.bookConcern = rows[2].getElementsByTagName('textarea')[0].value;
          this.new_book.ibsn = rows[3].getElementsByTagName('textarea')[0].value;
          this.new_book.abs = rows[4].getElementsByTagName('textarea')[0].value;
          let _this = this;
          await this.$axios.post("http://"+_this.$store.state.Host+":9000/springboot/add",JSON.stringify(this.new_book),{
            headers: {
              'Content-Type': 'application/json;charsetset=UTF-8'
            }
          })
            .then(function (response)
            {
              console.log(response);
              if(response == "success")
              {
                console.log(success);
              }
            }).catch(function (error)
            {
              console.log(error);
            })
        }
      }
  }
</script>

<style scoped lang="less">

  #add_page
  {
    margin: 40px 0;
    width: 960px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    background: transparent;

    display: flex;
    justify-items: center;
    align-items: center;
  }
  .row
  {
    width: 230px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items:flex-end;
    justify-content: space-between;
    margin:10px;
    span
    {
      margin: 0 5px;
    }
    textarea
    {
      resize: none;
      overflow:hidden;
    }
  }
  .add_btn
  {
    width: 100px; height: 100px;
    border-radius: 20px;
    background: red;
    color:white;
    font: bold 24px 黑体;

    text-align: center;
    line-height: 100px;

    cursor: pointer;
  }

</style>
