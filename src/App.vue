<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
 import header from './components/header'
import vueFormGeneratorExample from './components/vueFormGeneratorExample.vue';

export default {
  components: {
    'vue-form-generator-example': vueFormGeneratorExample,    
    'app-header': header
  }, 
  data () {
    return {
       isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
