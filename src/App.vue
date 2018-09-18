<template>
  <div>
    <vue-form-generator-example></vue-form-generator-example>
  </div>
</template>

<script>
import vueFormGeneratorExample from './components/vueFormGeneratorExample.vue';

export default {
  components: {
    'vue-form-generator-example': vueFormGeneratorExample,    
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
