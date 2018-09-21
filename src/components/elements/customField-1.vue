<!-- 
Custom field for VueFormGenerator: https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html
Register thid field as a global components (main.js)
-->
<template>
    
        <input 
        class="form-control" 
        type="text" 
        v-model="value" 
        :disabled="disabled"
        :maxlength="schema.max"
        :placeholder="schema.placeholder"
        :readonly="schema.readonly" >
    
</template>

<script>
   import { abstractField } from "vue-form-generator";

   export default {
         mixins: [ abstractField ]
   };
</script>