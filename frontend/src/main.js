import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { init, events, app } from "@neutralinojs/lib"


createApp(App).mount('#app')

init();
// hack for: https://github.com/neutralinojs/neutralinojs/issues/1179
events.on("windowClose", () => {
    app.exit();
});