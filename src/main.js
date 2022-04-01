import { createApp } from 'vue'
import App from './App.vue'

function a() {
    function b() {
        console.log(this);
    }
    b()
}

a();

createApp(App).mount('#app')
