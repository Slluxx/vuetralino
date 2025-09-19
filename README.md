# neutralinojs-template

Neutralino + Vite + VueJS

```
neu create myapp --template slluxx/vuetralino
```

Note: 
- A workaround has been added for https://github.com/neutralinojs/neutralinojs/issues/1179
- Sometimes there is a bug with websockets, simply refresh the page and it should be resolved.
- If vite uses a different port on your machine, change it in `neutralino.config.json` all the way at the bottom





---

# Rework

```
neu create myapp
cd myapp
npm create vite@latest frontend -- --template vue
cd frontend
npm run install
npm install @neutralinojs/lib
npm run build
cd ..
```

neutralino.config.json
```
{
  ..
  "documentRoot": "/resources/",
  "url": "/",
  ..
  "cli": {
    "binaryName": "test",
    "resourcesPath": "/frontend/dist/",
    "extensionsPath": "/extensions/",
    "binaryVersion": "6.2.0",
    "clientVersion": "6.2.0",
    "frontendLibrary": {
      "patchFile": "/frontend/index.html",
      "projectPath": "/frontend/",
      "devUrl": "http://localhost:5173",
      "initCommand": "npm install",
      "devCommand": "npm run dev",
      "buildCommand": "npm run build"
    }
  }
}
```

frontend/index.html, add `<script src="%PUBLIC_URL%/__neutralino_globals.js"></script>`
(running neu build (which runs npm run build), this will fail "can't be bundled without type="module" attribute" however it .. still works ..?)

main.js, add
```
import { app, events, init, window as neuWindow } from '@neutralinojs/lib';
init();
```
