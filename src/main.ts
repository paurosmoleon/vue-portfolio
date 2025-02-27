import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './styles.css'
import App from './App.vue'


import  {messages} from "./assets/locales/languages"
const i18n = createI18n({
    legacy:false,
    locale: 'es-ES',
    fallbackLocale: 'en-US',
    messages
    
})


const app = createApp(App)
app.use(i18n)
app.mount('#app')
