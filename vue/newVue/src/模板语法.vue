<script>
  export default{
    data() {
      return {
        num: 3,
        name: "张三",
        rawHtml: '<h1>标题</h1>',
        id: 'd1',
        url: 'https://img20.360buyimg.com/seckillcms/s280x280_jfs/t1/59379/2/23262/26944/63b3ec49F50d75c0a/f3f327156a04b2d6.jpg.webp',
        attributeName: 'id'
      }
    },
    methods: {
      newname() {
        this.name = "张新禧"
      },
      changeIdColor() {
        // let that = this;
        // that.id = 'd2'
        let newid = this.id
        if(newid !== 'd2') {
          this.id = 'd2'
        } else {
          this.id = 'd1'
        }
      }
    }
    
  }
</script>

<template>
  <div>
    <p>{{num}}</p>
    <p>{{name}}</p>
    <p v-once>{{name}}</p>
    <button @click="newname">改变name</button>
    <span v-html="rawHtml"></span>
    <div v-bind:id="id">绑定</div>
    <div :id="id">绑定方式2</div>
    <img v-bind:src="url" alt=""/>
    <button @click="changeIdColor">改变颜色</button>
    <button v-on:click="changeIdColor">改变颜色方式2</button>
    <p>{{name.split('').reverse().join('')}}</p>
    <p :[attributeName] = 'id'>动态绑定</p>
    <button @click="attributeName = 'class'">改变属性</button>
    <button @[mouseEvent]="attributeName = 'class'">改变属性</button>
    <button @click="mouseEvent='mouseover'">改变事件</button>

  </div>
</template>

<style scoped>
  #d1 {
    color: red;
  }
  #d2 {
    color: blue;
  }
  .d1 {
    font-size: 50px;
  }
</style>
