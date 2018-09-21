<template>
  <div class="form-wrapper">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="User name"
                    label-for="userNameInput"
                    horizontal
                    >
        <b-form-input id="userNameInput"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Enter your username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Company"
                    label-for="companyInput"
                    horizontal
                    >
        <b-form-input id="companyInput"
                      type="text"
                      v-model="form.company"
                      required
                      placeholder="Enter company name">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup3"
                    label="Website"
                    label-for="websiteInput"
                    horizontal
                    >
        <b-form-input id="websiteInput"
                      type="text"
                      v-model="form.website"
                      required
                      placeholder="Enter website url">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordFormGrup"
                    label="Password"
                    label-for="passwordInput"
                    horizontal
                    >
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="repeatPasswordFormGrup"
                    label="Repeat Password"
                    label-for="repeatPasswordInput"
                    horizontal
                    >
        <b-form-input id="repeatPasswordInput"
                      type="password"
                      v-model="form.repeatPassword"
                      required
                      placeholder="Repeat password">
        </b-form-input>
      </b-form-group>
     
      <b-button type="next" variant="primary">Next</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  components: {
  
  },
  data () {
    return {
      form: {
        username: '',
        company: '',
        website: '',
        password: '',
        repeatPassword: ''
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
