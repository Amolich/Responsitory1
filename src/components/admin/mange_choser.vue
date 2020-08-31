<template>
    <div id="m_c">
      <div id="out" class="flex">
        <div class="edit" @click="goto_book()"><span class="text">编辑图书</span></div>
        <div class="add" @click="goto_boo2k()"><span class="text">添加图书</span></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'mange_choser',
    methods:
    {
      async goto_book()
      {
        await this.$router.push('/mange_page');
      },
      async goto_boo2k()
      {
        await this.$router.push('/add_page');
      }
    }
  }
</script>

<style scoped lang="less">

  .text
  {
    font: bold 24px 黑体;
    color: white;
  }
  .flex
  {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  #out
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .edit
  {
    width: 250px; height: 400px;
    background: red;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    margin: 5px;
    cursor: pointer;
    text-align: center;
    line-height: 400px;
  }
  .add
  {
    width: 250px; height: 400px;
    background: green;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    margin: 5px;
    cursor: pointer;
    text-align: center;
    line-height: 400px;
  }
</style>
