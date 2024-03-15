<script>
export default {
  name: "Xiqueer",
  methods: {
    HandleQuery() {
      this.$toast.add({severity: 'info', summary: '失败', detail: "功能待开发中", life: 3000})
    }
  }
}
</script>

<template>
  <div class="flex">
    <Panel header="喜鹊儿" style="width: 100%">
      <div class="flex-auto">
        <FloatLabel class="input">
          <InputText v-model="stuno" style="width: 100%"/>
          <label for="username">学号</label>
        </FloatLabel>
      </div>
      <div class="flex">
        <Button style="margin-top: 20px;align-self: center" @click="HandleQuery">查询成绩</Button>
      </div>
    </Panel>
  </div>
</template>

<style scoped>
Panel {
  margin-top: 20px
}
</style>