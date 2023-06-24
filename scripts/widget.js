import { startWidget } from "./modules/widgetService.js";

const initWdget = async (app) => {
  const widget = await startWidget()
  app.append(widget)
}

initWdget(document.querySelector('#app'))