<template>
  <div class="form-wrapper">
    <b-form @submit="onSubmit" v-if="show">

     
      <b-form-group id="cardHolderGroup"
                    label="Card Holder's Name"
                    label-for="cardHolderInput"
                    >
        <b-form-input id="cardHolderInput"
                      type="text"
                      v-model="form.creditCard.holderName"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="cardNumberGroup"
                    label="Card Number"
                    label-for="cardNumberInput"
                    >
        <b-form-input id="cardNumberInput"
                      type="text"
                      v-model="form.creditCard.number"
                      required>
        </b-form-input>
      </b-form-group>
       <b-form-group id="expirationDataGroup"
                    label="Card Exp. Date"
                    label-for="expirationMoonth"                    
                    >
        <b-form-select id="expirationMonth"
                      :options="months  | to-readable-month"
                      required
                      v-model="form.creditCard.expirationData.month">       
        </b-form-select>
        <b-form-select id="expirationYear"
                      :options="years"
                      required
                      v-model="form.creditCard.expirationData.year">
        </b-form-select>
        <b-form-input id="cvc"
                      type="text"
                      v-model="form.creditCard.cvc"
                      placeholder="CVC"
                      required>
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
        creditCard: {
          holderName: '',
          number: '',
          expirationData: {
            'month': 1,
            'year': (new Date()).getFullYear()
          },
          cvc: null
        },
      },
      months: this.createArray(12),
      years: [2018, 2019],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    createArray(size) {
      let init = 0;
      let b =  Array(size).fill().map(() => init++)
      return b;
    }
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
