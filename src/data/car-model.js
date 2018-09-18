export const carModel = {
  name: "car",
  model: {
    id: 1,
    brand: "BMW",
    model: "525 ytds"
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
        label: "Brand",
        model: "brand",
        placeholder: "Your card brand",
        featured: true,
        required: true
      },
      {
        type: "input",
        inputType: "text",
        label: "Model",
        model: "model"
      }
    ]
  }
};
