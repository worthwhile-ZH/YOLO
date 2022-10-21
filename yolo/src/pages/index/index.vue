<template>
  <div>
    <div class="show">
      <div class="mark-text">当前分数</div>
      <div class="mark">{{mark}}</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(1)">+1</div>
      <div class="button left" @click="addMark(-1)">-1</div>
    </div>

    <div class="row">
      <div class="button right" @click="addMark(5)">+5</div>
      <div class="button left" @click="addMark(-5)">-5</div>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      mark:0
    }
  },
  methods:{
    addMark(add){
      this.mark = this.mark + add
      

    }
  }
 

 

 

 
}
</script>

<style lang="scss">
.show{
  text-align: center;
  height: 266px;
  background: #ea5149;
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: bold;
  .mark-text{
    font-size: 20px;
    padding: 28px;
  }
  .mark{
    font-size: 88px;
  }
}
  .row{ margin: 40px 56px;
  .button{ width: 70px;
  height: 70px;
  line-height:70px;
  border-radius: 20%;
  border: none;
  text-align:center;
  font-size: 25px;
  color:#FFFFFF;
  font-weight:bold;
  }
  }.right{ background:#EA5149;
  float: right;
  }.left{ background:#feb600;
  margin-right:80px;
  }
</style>
