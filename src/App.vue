<template>
  <router-view />
  <MenuBar/>
</template>

<script>
import { defineComponent } from 'vue'
import MenuBar from './components/MenuBar.vue';

export default defineComponent({
    components: { MenuBar }
})
</script>
