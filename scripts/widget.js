import { fetchWeather } from "./modules/APIservice.js";
import { startWidget } from "./modules/widgetService.js";

const initWdget = (app) => {
  const widget = startWidget()
  app.append(widget)

  fetchWeather('Киров')
}

initWdget(document.querySelector('#app'))