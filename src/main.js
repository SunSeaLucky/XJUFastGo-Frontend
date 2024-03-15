import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Panel from "primevue/panel";
import Toast from "primevue/toast";
import Fieldset from "primevue/fieldset";
import Message from "primevue/message";
import RadioButton from "primevue/radiobutton";

import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "@/assets/global.css"


import ToastService from "primevue/toastservice";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);


app.component('Button', Button);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);
app.component("Panel", Panel);
app.component("Toast", Toast);
app.component("Fieldset", Fieldset);
app.component("Message", Message);
app.component("RadioButton",RadioButton)
app.mount("#app");