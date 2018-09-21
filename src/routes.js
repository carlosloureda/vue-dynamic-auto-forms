import home from "./components/home";
import vueFormGeneratorExample from "./components/vueFormGeneratorExample";
import multiStepForm from "./components/multiStepForm/multiStepForm";

export default [
  { path: "/", component: home },
  { path: "/form-generator-example/1", component: vueFormGeneratorExample },
  { path: "/multi-step-form", component: multiStepForm }
];
