<script setup lang="ts">
// 对props 的静态类型的约束?
// const props = defineProps({
//   foo: { type: String, require: true},
//   bar: Number
// })
// 宏函数
interface Props{
  foo: string;
  bar?: number
}
const props = withDefaults(defineProps<Props>(), {
  foo: "hello",
  bar: 2
})
props.bar

</script>

<template>
  
</template>

<style scoped>

</style>
