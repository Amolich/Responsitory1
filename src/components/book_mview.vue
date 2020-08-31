<template>
    <div id="book_view">
        <div class="cover_big">
            <img src="../assets/logo.png" style="max-width:179px ">

        </div>
        <div class="right_m">
            <dl class="book_list">
                <dt><a>{{book.name}}</a></dt>
                <dd>
                    <span>[作者]:</span>
                    <a class="ap" @click="search_click(book.author,2)">{{book.author}}</a>
                </dd>
                <dd>
                    <span>[出版社]:</span>
                    <a class="ap" @click="search_click(book.bookConcern,3)">{{book.bookConcern}}</a>
                </dd>
                <dd>
                    <span>[ISBN]:</span>
                    <span>{{book.ibsn}}</span>
                </dd>
                <dd>
                    <span>[摘要]:</span>
                    <span>{{book.abs}}</span>
                </dd>
            </dl>
        </div>
    </div>

</template>

<script>
    export default {
        name: "book_mview",
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
    #book_view
    {
        width: 960px;
        //   float: left;
        //  background: red;
        display: flex;
        flex: 1;
        flex-direction:row;
        justify-content: left;
        align-items: center;
    }

    .cover_big
    {
        width: 179px; height: 238px;
        margin: 8px;
        border: solid 5px #cccccc;
        background: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right_m
    {
        width: 400px;
        background: transparent;
        display:flex;
        word-break:break-all;
    }
    .book_list
    {
        display: inline-block;
    dt {
    a {
        font: bold 24px 黑体;
        text-decoration: none;
        cursor: pointer;
    }
    }
    dd {
        font: normal 18px 黑体;
    a {
        cursor: pointer;
    }
    }
    }
</style>
