
<template>
  <div id="wea" style="position:absolute;" @click="get_weather">
    <div id="dis" >
      <div class="tag1"><span>{{city}}</span></div>
      <div class="tag1"><span>{{wea.forecast[0].type}}</span></div>
      <div class="tag1"><span>{{wea.forecast[0].low}}~{{wea.forecast[0].high}}</span></div>
      <div class="tag2">
        <div class="day" @click="gotowea" v-for="(item,i) in wea.forecast" :key = 'i'>
          <p>{{item.low}}~{{item.high}}</p>
          <p>{{item.fengxiang}} {{item.fengli}}</p>
          <p>{{item.type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Wea_obj} from '../class/weather_obj' //注意路径
  export default {
    name: "weather",
    data()
    {
      return {
        wea: new Wea_obj(),
        dat:{},
        addr:'https://restapi.amap.com/v3/ip?',
        key:'d380ebc99f9cc106ee5536537b58a252',
        city:'北京'
      };
    },
    methods:
      {
        gotowea()
        {
          window.open("https://www.baidu.com/s?word="+this.city+"天气预报");
        },
        async get_weather()
        {
          var _this = this;
          var add = _this.addr + 'key=' + _this.key;

          await _this.$axios.get(add)
            .then(function (response)
            {
              _this.city = response.data.city;
              //    console.log(_this.city);
            })
            .catch(function (error)
            {
              console.log(error)
            })

          await _this.$axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+_this.city)
            .then(function (response)
            {
              _this.dat = (response);
              var temp = new Wea_obj();
              temp.init(response.data.data);
              _this.wea = temp;
              //  console.log(_this.wea);
              for (const key in _this.wea.forecast)
              {
                var str = JSON.stringify(_this.wea.forecast[key].fengli);
                var s;
                s =  str.substring(10,12);
                _this.wea.forecast[key].fengli = s;
              }
            })
            .catch(function (error)
            {
              console.log(error);
            })

        }
      },
    beforeMount()
    {
      //  console.log(this.wea);
      this.get_weather();
    }
  }
</script>

<style scoped lang="less">
  #wea
  {
    #dis
    {
      width: 130px;
      height: 50px;
      background: white;

      position: relative;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;

      cursor: pointer;


      .tag2
      {
        position: absolute; top: 24px; left: -150px;
        width: 400px; height: 140px;
        background: white;
        border: 1px solid skyblue;
        border-radius: 10px;
        display: none;


        .day
        {
          font:normal 13px 黑体;
          color: #000ccc;
          margin: 20px 0;
          padding: 0 10px;

          //  z-index: 2;

        }
        :hover
        {
          background: #c18bd3;
          border-radius: 10px;
        }
      }
    }

    .tag1
    {
      font:normal normal 13px 黑体;
      color: blue;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }


    .tag2:hover .tag1
    {
      color: #ff0000;
    }

    #dis:hover .tag1
    {
      color: #ff0000;
    }

    #dis:hover .tag2
    {
      display:flex;
      justify-content: center;
      align-items: stretch;
      p
      {
        display:flex;
        justify-content: center;
        align-items: stretch;
      }
    }

  }
</style>
