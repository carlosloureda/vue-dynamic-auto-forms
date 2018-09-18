import VueFormGenerator from "vue-form-generator";

export const userModel = {
  name: "user",
  model: {
    id: 1,
    name: "John Doe",
    password: "J0hnD03!x4"
  },
  schema: {
    fields: [
      {
        type: "input",
        inputType: "text",
        label: "ID (disabled text field)",
        model: "id",
        readonly: true,
        disabled: true
      },
      {
        type: "input",
        inputType: "text",
        label: "Name",
        model: "name",
        placeholder: "Your name",
        featured: true,
        required: true
      },
      {
        type: "input",
        inputType: "password",
        label: "Password",
        model: "password",
        min: 6,
        required: true,
        hint: "Minimum 6 characters",
        validator: VueFormGenerator.validators.string
      }
    ]
  }
};
