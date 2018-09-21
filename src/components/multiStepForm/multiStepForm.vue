<template>
    <div>
        <h1>Here a boostrap form please:</h1>        
        <form-1-gen></form-1-gen>
        <form-2-gen></form-2-gen>
        <form-3-gen></form-3-gen>        
    </div>  
</template>

<script>

import form1Gen from './form-1-generated';
import form2Gen from './form-2-generated';
import form3Gen from './form-3-generated';

export default {
 components: {    
    'form-1-gen': form1Gen,
    'form-2-gen': form2Gen,
    'form-3-gen': form3Gen
  },
  data() { 
      return {
       
    } 
  },
  methods: {
  
  }
}
</script>