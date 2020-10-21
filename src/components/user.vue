<template>
    <div id = "user">
      <div id="name">{{this.user_name}}</div>
    </div>
</template>

<script>
  export default {
    name: 'user',
    data()
    {
      return {
        user_name : "13543"
      }
    },
    mounted () {
      //user_name = this.$store.state.user_name;
    }
  }
</script>

<style scoped>
  #user
  {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
