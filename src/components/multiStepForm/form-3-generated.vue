<!--  Example from: https://bootstrap-vue.js.org/docs/components/form -->
<template>
  <div class="form-wrapper">
    <form> <!-- podriamos manejaer el submit aqui ...-->
      <vue-form-generator :schema="form.schema" :model="form.model" :options="formOptions"></vue-form-generator>
    </form>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import Vue from 'vue'
Vue.use(VueFormGenerator)

// TODO: cant add filters :(
function  createArray(size, init=1) {
    let b =  Array(size).fill().map(() => init++)
    return b;
}
const months = createArray(12);
const years = createArray(10, (new Date()).getFullYear());

export default {
  components: {
  
  },
  
  data () {
    return {
      //months: [1,2,3,4], //this.createArray(12),
      //years: [2018, 2019],
      show: true,
      form: {
        model: {
          holderName: '',
          number: '',
          expirationData: {
            'month': new Date().getMonth() + 1, //TODO: :( fucking filters
            'year': (new Date()).getFullYear()
          },
          cvc: null
        }, 
        schema: {
          fields: [
            {
              type: "input",
              inputType: "text",
              model: "holderName",
              label: "Card Holder's Name",
            },
            {
              type: "input",
              inputType: "text",
              label: "Card Number",
              model: "email"
            },
            {
              //TODO: who to pass filters?
              type: "select",
              //label: "Skills",
              model: "expirationData.month",
              values: months,
              selectOptions: {
                hideNoneSelectedText: true               
              },       
             // filters: 'to-readable-month'
            },
            {
              //TODO: who to pass filters?
              type: "select",
              //label: "Skills",
              model: "expirationData.year",
              selectOptions: {
                hideNoneSelectedText: true               
              },       
              values: years
            },
            {
              type: "input",
              inputType: "number",
              model: "cvc",
              placeholder: "CVC"
            },
            {
              // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
              type:"submit",
              id: "submit_3",
              buttonText:"Prev",              
              fieldClasses: 'btn btn-secondary' // no se porque hace falta :(
            },
            {
             // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
              type:"submit",
              id: "asdasd",
              buttonText:"Submit",
              onSubmit:this.onSubmit,
              fieldClasses: 'btn btn-primary' // no se porque hace falta :(
            }            
          ]
        }        
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
   
  },
  filters: {
      'to-readable-month': function(valueArr) {
        return valueArr.map(num => num + 1);
      } 
  },
}
</script>
<style scoped>
.form-wrapper {
  width: 70%;
  margin: 2px auto;
  padding: 2em;
  border: 2px solid #eee;
}
</style>

