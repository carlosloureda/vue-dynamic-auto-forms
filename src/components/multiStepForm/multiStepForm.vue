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
            <button v-show="actualStep === 2" v-on:click.prevent="loadCutomFieldInContactSchemaAndModel" type="button" class="btn btn-warning">No me presiones!👀</button>
            <button v-show="actualStep === 2" v-on:click.prevent="loadCutomFieldInNewchemaAndModel" type="button" class="btn btn-danger">Este si que no ¡por Dios!😣</button>            
        </div>
        <div>
            <h2>El modelo se puede ver aquí en todo momento</h2>            
            <pre v-bind="models.userData.model">USER: {{models.userData.model}}</pre>
            <pre v-bind="models.contactData.model">CONTACT: {{models.contactData.model}}</pre>
            <pre>CARD: {{models.cardData.model}}</pre>
        </div>
    </div>  
</template>

<script>
import Vue from "vue";
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
        fireUpdate: false,
        // selectedModel: userData,
        formOptions: {
            validateAfterLoad: true,
            validateAfterChanged: true
        },  
    } 
  },
  methods: {
      updateView: function() {
          this.fireUpdate = true
      },
      // incr +1 or -1
    nextStep: function(incr){
        this.actualStep = this.actualStep <= 3 ? this.actualStep + incr : this.actualStep;       
    },
    submit: () =>{
        alert("Ahora se enviaría el formulario!, pero podemos ver que el modelo está perfectamente actualizado y se mantiene reactivo todo el tiempo. Faltaría manejar prev-next con urls y eso")
    },
    // Carga el customfield como un nuevo atributo y schema del modelo ContactData
    loadCutomFieldInContactSchemaAndModel: function() {              
            
        var dinamicNewSchema =  {
            fields: [
                {
                    type: "custom1",
                    label: "Etiqueta customizada (Schema dinámico en ContactData)",
                    model: "inputCustomField1",
                    placeholder: "Eaea"                   
                },
            ]
        };      
        /*let changeSchema  = true;        
        if (this.models.contactData.schema.fields && this.models.contactData.schema.fields.length) {
            this.models.contactData.schema.fields.map(el => {
                if (el.type === "custom1") {
                    changeSchema  = false;
                }
            })  
        }*/
        let msg = 'Dato cargado en modelo dinámico (extendido ContactData)! 😎';
        this.models.contactData.model = Object.assign({}, this.models.contactData.model,{inputCustomField1: msg } );  
        this.models.contactData.schema.fields.push(dinamicNewSchema.fields[0])
        this.models.contactData.schema.fields = Object.assign({}, this.models.contactData.schema.fields)
        //this.models.contactData.schema.fields = Object.assign({}, this.models.contactData.schema.fields, dinamicNewSchema.fields);  
    },
  //  Intenta cargar el customField como un modelo y un schema a parte
   loadCutomFieldInNewchemaAndModel: function() {              
        var newModel = {
            inputCustomField1: 'Dato cargado desde modelo dinámico ! 😎'
        }                
        var dinamicNewSchema =  {
            fields: [
                {
                    type: "custom1",
                    label: "Etiqueta customizada (Schema nuevo)",
                    model: "inputCustomField1",
                    placeholder: "Eaea"                   
                },
            ]
        };    

        let newData = {
            model: newModel,
            schema: dinamicNewSchema
        } 
        this.models = Object.assign({}, this.models, {newModel: newData } );  
        console.log("en la creacion: ", this.models)
    },
  },  
  computed: {
    selectedModel: function() {
        console.log("Dynamic form fired creation")
        let selected = this.models.userData;
        if (this.actualStep === 2) {
            selected = this.models.contactData;
        } else if (this.actualStep === 3) {
            selected = this.models.cardData;
        }
        if(this.fireUpdate) {
            selected = selected;
            console.log("YUEYEYEYYEYEAIKSJBJ DSKJ SA")
        }
        console.log("selected: ", selected)
        return selected;
    }
  },
  created() {
      console.log("Inside created")
  },
  beforeUpdate() {
    console.log("Inside beforeUpdate")
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
