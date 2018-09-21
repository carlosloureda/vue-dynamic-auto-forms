# dinamic-auto-forms

> A Vue.js project for creating forms from a schema using the library [vue-form-generator](https://github.com/vue-generators/vue-form-generator/).
> This example takes some fake models that have inside them the model per se and
> the schema we want to use for the auto-generated form. In the main view we see
> one button for each model, when a model is selected a modal is opened with the form for that
> model, everything happening dynamically.

![Example video](/src/assets/auto-forms.gif?raw=true "Example video")

## Build Setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Special thanks

For the modal component I have used the modal example from [alligator](https://alligator.io/vuejs/vue-modal-component/)
and the basic concepts for playing around with Vue.js from [The Net Ninja Youtube channel](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa)
