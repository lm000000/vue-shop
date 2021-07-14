<template>
  <div>
    <!--常常会出现读不出数据的属性  但是又有数据   是因为模块渲染时时先加载异步数据的初始化数据
       等渲染完成后在渲染器带数据的异步数据   所以会报错
       -->
    <div class="first" v-if="canShu.info">
      <div>{{canShu.info.key}}</div>
      <table>
      <tr v-for="item in canShu.info.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
      </table>
    </div>
    <div class="two"  v-if="canShu.info">
      <div>{{canShu.rule.key}}</div>
        <div v-for="item in canShu.rule.tables">
          <div v-for="item1 in item" class="item1">
            <span v-for="item2 in item1">
                {{item2}}
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailCanShu",
    props:{
      canShu:{
        type:Object,
      },
    },
  }
</script>

<style scoped>
  .first{
    position: relative;
    margin-top: 20px;
  }
  table{
    margin-top: 15px;
    border:1px solid;
    border-collapse: collapse;
    margin-left: 40px;
  }
  td{
    border:1px solid;
    text-align: center;
  }
  .two{
    margin-top: 15px;
  }
  .item1{
    margin-top: 15px;
    display: flex;
  }
  .item1 span{
    flex: 1;
  }
  .first::before{
    position: absolute;
    top: -15px;
    content: "";
    height: 2px;
    width: 100%;
    background: #a3a3a5;
  }

</style>