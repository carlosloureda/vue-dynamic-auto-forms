<!-- 
Custom field for VueFormGenerator: https://icebob.gitbooks.io/vueformgenerator/content/fields/custom_fields.html
Register thid field as a global components (main.js)
-->
<template>
    
        <input 
            class="form-control" 
            type="text" 
            @input="onInput"
            v-model="value"
            :disabled="disabled"
            :maxlength="schema.max"
            :placeholder="schema.placeholder"
            :readonly="schema.readonly" >
    
</template>

<script>
   import { abstractField } from "vue-form-generator";

   export default {
         mixins: [ abstractField ],
         methods: {
            onInput($event) {
                let value = $event.target.value;
                console.log("value: ", value);
                console.log("this.schema: ", this.schema);
                /*switch(this.schema.type.toLowerCase()) {
                    case "number":
                    case "range":
                        if(isNumber($event.target.valueAsNumber)) {
                            value = $event.target.valueAsNumber;
                        }
                        break;
                }*/
                this.value = value;
            },
         }
   };
</script>

<!--
<template lang="pug">
.wrapper
	input.form-control(
		:id="getFieldID(schema)",
		:type="schema.inputType.toLowerCase()",
		:value="value",
		@input="onInput",
		@blur="onBlur",
		:class="schema.fieldClasses",
		@change="schema.onChange || null",
		:disabled="disabled",
		:accept="schema.accept",
		:alt="schema.alt",
		:autocomplete="schema.autocomplete",
		:checked="schema.checked",
		:dirname="schema.dirname",
		:formaction="schema.formaction",
		:formenctype="schema.formenctype",
		:formmethod="schema.formmethod",
		:formnovalidate="schema.formnovalidate",
		:formtarget="schema.formtarget",
		:height="schema.height",
		:list="schema.list",
		:max="schema.max",
		:maxlength="schema.maxlength",
		:min="schema.min",
		:minlength="schema.minlength",
		:multiple="schema.multiple",
		:name="schema.inputName",
		:pattern="schema.pattern",
		:placeholder="schema.placeholder",
		:readonly="schema.readonly",
		:required="schema.required",
		:size="schema.size",
		:src="schema.src",
		:step="schema.step",
		:width="schema.width",
		:files="schema.files")
	span.helper(v-if="schema.inputType.toLowerCase() === 'color' || schema.inputType.toLowerCase() === 'range'") {{ value }}
</template>-->