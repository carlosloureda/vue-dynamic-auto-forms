<!--  Example from: https://bootstrap-vue.js.org/docs/components/form -->
<template>
  <div class="form-wrapper">
    <form> <!-- podriamos manejaer el submit aqui ...-->
      <vue-form-generator :schema="form.schema" :model="form.user" :options="formOptions"></vue-form-generator>
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
        user: {
          id: 1,
          email: 'johndoe@mail.com',
          name: 'John Doe',
        }, 
        schema: {
          fields: [
            {
              type: "input",
              inputType: "text",
              model: "id",
              readonly: true,
              disabled: true,
              visible: false
            },
            {
              type: "input",
              inputType: "email",
              label: "Email address:",
              model: "email",
              placeholder: "Email"
            },
            {
              type: "input",
              inputType: "text",
              label: "Your Name:",
              model: "name",
              placeholder: "Your name",
              featured: true,
              required: true
            },
            {
             // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
              type:"submit",
              buttonText:"Next",
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
    }
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
