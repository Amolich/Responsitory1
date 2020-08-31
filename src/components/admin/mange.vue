<template>
    <div id="mange">
      <table class="tab">
        <tr>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>ISBN</th>
          <th style="width: 300px">摘要</th>
          <th style="width: 60px" v-if="edit_num < 10">保存</th>
          <th style="width: 60px" v-else>编辑</th>
          <th style="width: 60px" v-if="edit_num < 10">取消</th>
          <th style="width: 60px" v-else>删除</th>
        </tr>
        <tr v-for="(item,i) in books" :key="i">
          <td class="td_name">{{item.name}}</td>
          <td>{{item.author}}</td>
          <td>{{item.bookConcern}}</td>
          <td>{{item.ibsn}}</td>
          <td class="abs_td">{{item.abs}}</td>
          <td class="td_but" v-if="edit_num == i"><div class="but" @click="text_change(i)">保存</div></td>
          <td class="td_but" v-else><div class="but" @click="edit(item,i)">编辑</div></td>
          <td class="td_but" v-if="edit_num == i"><div class="but" @click="cancel(i)">取消</div></td>
          <td class="td_but" v-else><div class="but" @click="delete_book(item.id)">删除</div></td>
        </tr>
      </table>
    </div>
</template>

<script>
  import page_changer from '../page_changer'
  export default {
    name: 'mange',
    components:{page_changer},
    data()
    {
      return{
          temp_book: null,
          edit_num: 11
      }
    },
    props: ['books','page'],
    inject:['reload'],
    methods:
    {
      async goto_book(text)
      {
        await this.$router.push('/book_message/'+text);
      },
      delete_book(id)
      {
        var _this = this;
        this.$axios.post("http://"+_this.$store.state.Host+":9000/springboot/delete?id="+id)
          .then(function (response)
          {
            console.log(response);
            _this.reload_book();
          })
          .catch(function (error)
          {
            console.log(error);
          })
      },
      edit(item,i)
      {
        var tr = document.getElementsByTagName('tr')[i+1];
        var tds = tr.getElementsByTagName('td');
        this.temp_book = item;
        this.edit_num = i;
        for (let j = 0; j < 4; j++)
        {
          let temp = tds[j].innerHTML;
          tds[j].innerHTML = "<textarea  autoHeight='true'>"+temp+"</textarea>";
          let textarea = tds[j].getElementsByTagName('textarea')[0];
          textarea.style.width="100px";
          textarea.style.resize="none";
          textarea.style.overflow="hidden";
        }
        let temp = tds[4].innerHTML;
        tds[4].innerHTML = "<textarea  autoHeight='true'>"+temp+"</textarea>";
        let textarea = tds[4].getElementsByTagName('textarea')[0];
        textarea.style.width="270px";
        textarea.style.resize="none";
        textarea.style.overflow="hidden";
      },
      text_change(i)
      {
        let tr = document.getElementsByTagName('tr')[i+1];
        let text_areas = tr.getElementsByTagName('textarea');
        this.temp_book.name = text_areas[0].value;
        this.temp_book.author = text_areas[1].value;
        this.temp_book.bookConcern = text_areas[2].value;
        this.temp_book.ibsn = text_areas[3].value;
        this.temp_book.abs = text_areas[4].value;
        this.save();
        this.cancel(i);

        console.log(this.temp_book);
        //发送请求
      },
      async save()
      {
        let _this = this;
        await this.$axios.post("http://"+_this.$store.state.Host+":9000/springboot/edit",JSON.stringify(this.temp_book),{
          headers: {
            'Content-Type': 'application/json;charsetset=UTF-8'
          }
        })
          .then(function (response)
          {
            _this.reload_book();
          })
          .catch(function (error)
          {
            console.log(error);
          })
      },
      cancel(i)
      {

        let tr = document.getElementsByTagName('tr')[i+1];
        let text_areas = tr.getElementsByTagName('textarea');
        var tas = [];
        for (const argumentsKey in text_areas)
        {
          tas.push(text_areas[argumentsKey]);
        }

        for (let j = 0; j < 5; j++)
        {
          tas[j].outerHTML= tas[j].value;
        }
        this.edit_num = 100;
      },
      reload_book()
      {

        this.$emit('get_book');
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  #mange
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab
  {
    width: 960px;
    border: 1px solid #0000ee;
    border-collapse:collapse;

 //   position: absolute; top:20%; transform: translate(0,0);

    table-layout: fixed;
    th
    {
      text-align: center;
      border:1px solid #0000ee;
    }
    td
    {
      height: 30px;
      text-align: left;
      padding-left: 10px;
      border:1px solid #0000ee;
      white-space:nowrap;overflow:hidden;text-overflow: ellipsis;


    }
    .abs_td
    {
    }
    .td_but
    {
      padding: 0 7px;
    }
    .but
    {
      width: 40px;
      font: normal 16px 黑体;
      background: #ee0000;
      color: white;
      padding: 5px;
      text-align: center;
      border-radius: 7px;
      cursor: pointer;
    }
  }
  .text
  {
    resize : none;
    overflow:hidden;
    width: 80px;
  }
</style>
