<template>
    <div>
        <!-- 时钟 -->
      <div class="clockcontainer">
          <div class="clock">
              <p>00:00</p>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.clockcontainer{
    position: relative;
    .clock{
        width: 200px;
        height: 200px;
        border-radius:50% ;
        border: 1px solid black;
        position: absolute;
        top: 100px;
        left: 88px;
        text-align: center;

    }
    p{
        margin-top: 80px;
        font-size: 30px;
    }

}
</style>