<script>
import Const from "@/assets/Const"

export default {
  name: "DragonFly",
  methods: {
    HandleUpload() {
      fetch(Const.HOST + 'uploadRunData', {
        method: "POST",
        body: JSON.stringify({
          "distance": this.distance,
          "stuno": this.stuno
        })
      })
          .then(res => res.json())
          .then(data => {
            if (data.status == "success") {
              this.$toast.add({severity: 'success', summary: '成功', detail: data.msg, life: 3000})
            } else {
              throw new Error(data.msg)
            }

          })
          .catch((error) => {
            this.$toast.add({severity: 'info', summary: '失败', detail: error, life: 3000})
          })

    }
  },
  data() {
    return {
      stuno: null,
      distance: null,
      startTime: null,
      endTime: null,
      ingredient: ''
    }
  }
}
</script>

<template>
  <div class="flex">
    <Panel header="飞翔的红蜻蜓" style="width: 100%">
      <div class="flex-auto">
        <FloatLabel class="input">
          <InputText v-model="stuno" style="width: 100%"/>
          <label for="username">学号</label>
        </FloatLabel>
        <FloatLabel class="input">
          <InputText v-model="distance" style="width: 100%"/>
          <label for="username">欲刷总里程（KM）</label>
        </FloatLabel>
        <!--        <FloatLabel class="input">-->
        <!--          <InputText id="username" v-model="startTime" style="width: 100%"/>-->
        <!--          <label for="username">开始时间戳</label>-->
        <!--        </FloatLabel>-->
        <!--        <FloatLabel class="input">-->
        <!--          <InputText id="username" v-model="endTime" style="width: 100%"/>-->
        <!--          <label for="username">截止时间戳</label>-->
        <!--        </FloatLabel>-->
      </div>
      <div class="card flex justify-content-center" style="margin-top: 10px">
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese"/>
            <label for="ingredient1" class="ml-2">随机生成时间</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom"/>
            <label for="ingredient2" class="ml-2">Mushroom</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper"/>
            <label for="ingredient3" class="ml-2">Pepper</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion"/>
            <label for="ingredient4" class="ml-2">Onion</label>
          </div>
        </div>
      </div>
      <div class="flex">

        <Button style="margin-top: 20px;align-self: center" @click="HandleUpload">上传里程</Button>
      </div>


    </Panel>

  </div>

</template>
<style scoped>

</style>