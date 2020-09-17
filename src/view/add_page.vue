<template>
  <div>
    <div id = "add_body">
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
      <div id = "add_message">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'add_page',
    components:{},
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
          const text_area = document.getElementById("add_message");
          let _this = this;
          let flag = 1;
          for (const thisKey in _this.new_book)
          {
            if(_this.new_book[thisKey]==null || _this.new_book[thisKey]=="" )
            {
              flag = 0;
              break;
            }
          }
          if(flag==1)
          await this.$axios.post("http://"+_this.$store.state.Host+":9000/springboot/add",JSON.stringify(this.new_book),{
            headers: {
              'Content-Type': 'application/json;charsetset=UTF-8'
            }
          })
            .then(function (response)
            {
              console.log(response);
              text_area.innerText += _this.new_book.name+"已添加\n";
              if(response == "success")
              {
                console.log(success);
              }
            }).catch(function (error)
            {
              console.log(error);
            })
          else
          {
            alert("请输入完整的信息");
          }
        }
      }
  }
</script>

<style scoped lang="less">

  #add_page
  {
    margin: 40px 0;
//    width: 960px;
//    position: absolute;
//    left: 50%;
//    transform: translate(-50%,0);
    background: #ccc;
    opacity: 50%;
    margin: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  #add_message
  {
    margin: 10px;
    width: 200px; height: 250px;
    background: #ccc; opacity: 50%;
    overflow-x: hidden;
    overflow-y: scroll;
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

  #add_body
  {
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
  }

</style>
