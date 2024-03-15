<script>

export default {
  components:{},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "notice",
  props:["notice"]
}
</script>

<template>
  <Fieldset legend="欢迎使用XJUFastGo">
    <p class="m-0">
      {{ notice }}</p>
  </Fieldset>
</template>

<style scoped>

</style>