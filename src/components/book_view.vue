<template>
    <div id="book_view">
        <img src="../assets/logo.png">
        <dl class="book_list">
            <dt><a @click="goto_book(book.id)" v-html="book.name"></a></dt>
            <dd>
                <span>作者:</span>
                <a class="ap" @click="search_click(book.author,2)"  v-html="book.author"></a>
            </dd>
            <dd>
                <span>出版社:</span>
                <a class="ap" @click="search_click(book.bookConcern,3)"  v-html="book.bookConcern"></a>
            </dd>
            <dd>
                <span>ISBN:</span>
                <span>{{book.ibsn}}</span>
            </dd>
            <dd>
                <span>摘要:</span>
                <span>{{book.abs}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "book_view",
        props: ['book'],
        methods:
        {
            async search_click(text,range)
            {
                await this.$router.push('/blank');
                await this.$router.push('/search_result/'+text+'/'+range);
            },
            async goto_book(text)
            {
                await this.$router.push('/blank');
                await this.$router.push('/book_message/'+text);
            }
        }
    }
</script>

<style scoped lang="less">
    *
    {
        background: transparent;
    }
    .book_list
    {
        dt
        {
            a
            {
                font: bold 24px 黑体;
                text-decoration: none;
                cursor: pointer;

            }
            a:hover
            {
                color: #59b4d3;
            }
        }
        dd
        {
            font: normal 20px 黑体;
        }
    }
    .ap
    {
        text-decoration: none;
        color: black;
        cursor: pointer;

    }
    .ap:hover
    {
        color: #59b4d3;
        cursor: pointer;
    }


    #book_view
    {
        border-bottom:   dashed 2px #cccccc;
        width:960px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img
      {
        width: 90px;
        height: 127px;
        margin: 0 10px;
        box-shadow:2px 2px 5px #cccccc;
      }
    }
</style>
