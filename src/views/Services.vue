<template>
  <div class="about">
    <h1>Sección de servicios</h1>
    <hello-world></hello-world>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'    //la @ lleva directamente a la carpeta src

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
