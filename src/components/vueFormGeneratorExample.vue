<template>
    <div>
        <h1>Select your model:</h1>
        <button v-for="(model, index) in allModels" :key="index" v-on:click="selectForm(model)">{{model.name}}</button>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
        >
            <h2 slot="header">Formulario para modelo: {{selectedModel.name}}</h2>
            <vue-form-generator slot="body" :schema="selectedModel.schema" :model="selectedModel.model" :options="formOptions"></vue-form-generator>
        </modal>
    </div>  
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import modal from './modal.vue';
import Vue from 'vue'
Vue.use(VueFormGenerator);

import { allModels } from '../data/models';

export default {
 components: {
    'modal': modal
  },
  data() { 
      return {
        selectedModel: "",
        isModalVisible: false,
        allModels: allModels,
        userModel: allModels.userModel,
        carModel: allModels.carModel,
        exampleModel: allModels.exampleModel,        
        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        }
    } 
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    selectForm: function(model) {
        //TODO: the model passed has more attributes on it, fix this. it is 5 am xD
        console.log("Clciked select form: ", model)
        this.selectedModel = {
            name: model.name,
            model: model.model,
            schema: model.schema
        };
        this.showModal()
    }
  }
}
</script>