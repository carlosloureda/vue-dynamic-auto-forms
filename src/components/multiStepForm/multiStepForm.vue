<template>
    <div class="wrapper">
        <h1>Bienvenidos al maravilloso mundo de JS 🐱‍👤</h1>     
        <div class="form-wrapper">
            <form> <!-- podriamos manejaer el submit aqui ...-->                
                <b-button v-if="actualStep !== 1" v-on:click.prevent="nextStep(-1)" type="button" variant="secondary">Prev</b-button>
                <b-button v-if="actualStep !== 3" v-on:click.prevent="nextStep(+1)" type="button" variant="primary">Next</b-button>                
                <b-button v-if="actualStep === 3" v-on:click.prevent="submit" type="button" variant="primary">Submit</b-button>
                <vue-form-generator :schema="selectedModel.schema" :model="selectedModel.model" :options="formOptions"></vue-form-generator>
            </form>
        </div>
        <div>
            <h2>Venga! Pulsa el botón:</h2>
            <button v-show="actualStep === 2" v-on:click.prevent="loadCutomFieldInSchema" type="button" class="btn btn-danger">No me presiones!👀</button>
        </div>
        <div>
            <h2>El modelo se puede ver aquí en todo momento</h2>            
            <pre>USER: {{models.userData.model}}</pre>
            <pre>CONTACT: {{models.contactData.model}}</pre>
            <pre>CARD: {{models.cardData.model}}</pre>
        </div>
    </div>  
</template>

<script>

import form1Gen from './form-1-generated';
import form2Gen from './form-2-generated';
import form3Gen from './form-3-generated';
import {userData, contactData, cardData} from './data/models';
//import customField1 from "../elements/customField-1"

export default {
 components: {    
    'form-1-gen': form1Gen,
    'form-2-gen': form2Gen,
    'form-3-gen': form3Gen,
   // 'customField1': customField1
  },
  data() { 
    return {
        actualStep: 1, 
        models: {
            userData, contactData, cardData
        },
        // selectedModel: userData,
        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        },  
    } 
  },
  methods: {
      // incr +1 or -1
    nextStep: function(incr){
        this.actualStep = this.actualStep <= 3 ? this.actualStep + incr : this.actualStep;       
    },
    submit: () =>{
        alert("Ahora se enviaría el formulario!, pero podemos ver que el modelo está perfectamente actualizado y se mantiene reactivo todo el tiempo. Faltaría manejar prev-next con urls y eso")
    },
    loadCutomFieldInSchema: function() {
        var newModel = {
            inputCustomField1: 'Dato cargado desde modelo dinámico ! 😎'
        }
        var dinamicNewSchema =  {
            fields: [
                {
                    type: "custom1",
                    label: "Custom Field (first try)",
                    model: "inputCustomField1"
                },
            ]
        };        
        console.log(" this.contactData.schema.fields: ",  this.models.contactData.schema.fields)
        console.log("dinamicNewSchema.fields[0]: ", dinamicNewSchema.fields[0])
        //this.models.contactData.schema.fields.push(dinamicNewSchema.fields[0]) // o merge 
        this.models.contactData.schema.fields = [
            ...this.models.contactData.schema.fields, dinamicNewSchema.fields[0]
        ]
        this.models.contactData.model.inputCustomField1 = 'Dato cargado desde modelo dinámico ! 😎'
        console.log(" this.contactData.schema.fields: ",  this.models.contactData.schema.fields)
        //this.contactData.model
    }
  },
  computed: {
    selectedModel: function() {
        let selected = userData;
        if (this.actualStep === 2) {
            selected = contactData;
        } else if (this.actualStep === 3) {
            selected = cardData;
        }
        return selected;
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 70%;
  margin: 25px auto;
  padding: 2em;
  border: 2px solid #eee;
}
</style>
