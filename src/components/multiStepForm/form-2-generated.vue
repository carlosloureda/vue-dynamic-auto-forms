<template>
  <div class="form-wrapper">
    <form>
      <!-- Como poner las labels inline con los inputs tendria un poco de reto -->
      <vue-form-generator :schema="form.schema" :model="form.model" :options="formOptions"></vue-form-generator>
    </form>    
  </div>
</template>


<script>
import VueFormGenerator from "vue-form-generator";
import Vue from 'vue'
Vue.use(VueFormGenerator)
export default {
  components: {
  
  },
  data () {
    return {
      form: {
        model: {
          username: '',
          company: '',
          website: '',
          password: '',
          repeatPassword: ''
        },
        schema: {
          fields: [
            {
              type: "input",
              inputType: "text",
              model: "username",
              label: "User name",
            //  labelClasses: 'col-sm-3 col-form-label',
              placeholder: "Enter your username"
            },
            {
              type: "input",
              inputType: "text",
              label: "Company",
              model: "company",
              placeholder: "Enter company name"
            },
            {
              type: "input",
              inputType: "text",
              label: "Website",
              model: "website",
              placeholder: "Enter webiste url",
              featured: true,
              required: true
            },
            {
              type: "input",
              inputType: "password",
              label: "Your password",
              model: "password",
              placeholder: "Your password",
              featured: true,
              required: true
            },
            {
              type: "input",
              inputType: "password",
              label: "Repeat password",
              model: "repeatPassword",
              placeholder: "Repeat password",
              featured: true,
              required: true
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
              id: "submit_2",
              buttonText:"Next",
              onSubmit:this.onSubmit,
              fieldClasses: 'btn btn-primary' // no se porque hace falta :(
            },
                        
          ]
        },
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
  }
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
