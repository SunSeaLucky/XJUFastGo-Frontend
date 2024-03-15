<script>
import notice from "@/components/Notice.vue";
import DragonFly from "@/components/DrangonFly.vue";
import Xiqueer from "@/components/Xiqueer.vue";
import Const from "@/assets/Const"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {Xiqueer, DragonFly, notice},
  methods: {},
  data() {
    return {
      notice: null
    }
  },
  mounted() {
    fetch(Const.HOST + "notice")
        .then(res => res.json())
        .then(data => {
          this.notice = data.notice
        })
  }
}
</script>

<template>
  <Toast position="top-center"/>

  <div class="flex-auto">
    <div v-if="notice">
      <notice :notice="notice"/>
    </div>
    <div class="flex-auto">
      <DragonFly/>
      <Xiqueer/>
    </div>

  </div>

</template>

<style>
.input {
  margin-top: 30px;
  width: 100%;
}

</style>
