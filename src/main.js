import {createApp} from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css';

//PrimeVue components
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import SelectButton from "primevue/selectbutton";

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true, theme: {
        preset: Aura, options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton);

app.mount('#app');
