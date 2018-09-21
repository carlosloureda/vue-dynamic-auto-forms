////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////                                CARD DATA                               ////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function createArray(size, init = 1) {
  let b = Array(size)
    .fill()
    .map(() => init++);
  return b;
}
const months = createArray(12);
const years = createArray(10, new Date().getFullYear());

export const cardData = {
  model: {
    holderName: "",
    number: "",
    expirationData: {
      month: new Date().getMonth() + 1, //TODO: :( fucking filters
      year: new Date().getFullYear()
    },
    cvc: null
  },
  schema: {
    fields: [
      {
        type: "input",
        inputType: "text",
        model: "holderName",
        label: "Card Holder's Name"
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
        }
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
        inputType: "text",
        model: "cvc",
        placeholder: "CVC"
      }
      /*  {
        // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
        type: "submit",
        id: "submit_3",
        buttonText: "Prev",
        fieldClasses: "btn btn-secondary" // no se porque hace falta :(
      },
      {
        // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
        type: "submit",
        id: "asdasd",
        buttonText: "Submit",
        onSubmit: this.onSubmit,
        fieldClasses: "btn btn-primary" // no se porque hace falta :(
      }*/
    ]
  }
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////                             CONTACT DATA                               ////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const contactData = {
  model: {
    username: "",
    company: "",
    website: "",
    password: "",
    repeatPassword: ""
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
      }
      /* {
        // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
        type: "submit",
        id: "submit_3",
        buttonText: "Prev",
        fieldClasses: "btn btn-secondary" // no se porque hace falta :(
      },
      {
        // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
        type: "submit",
        id: "submit_2",
        buttonText: "Next",
        onSubmit: this.onSubmit,
        fieldClasses: "btn btn-primary" // no se porque hace falta :(
      }*/
    ]
  }
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////                               USER DATA                                ////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const userData = {
  model: {
    id: 1,
    email: "johndoe@mail.com",
    name: "John Doe"
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
      }
      /* {
        // 🐱‍💻 fieldClasses no aparecian en la documentación, ni tampoco el hack del type :(
        type: "submit",
        buttonText: "Next",
        onSubmit: this.onSubmit,
        fieldClasses: "btn btn-primary" // no se porque hace falta :(
      }*/
    ]
  }
};

export const allData = {
  userData,
  contactData,
  cardData
};
