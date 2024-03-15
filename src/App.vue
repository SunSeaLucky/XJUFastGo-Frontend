<template>
  <div class="flex">
    <Home/>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  components: {
    Home
  }
}
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
