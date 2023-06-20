import { startWidget } from "./modules/widgetService.js";

const initWdget = (app) => {
  const widget = startWidget()
  app.append(widget)
}

initWdget(document.querySelector('#app'))