import { cityServiceSearch } from "./modules/cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const initWdget = async (app) => {

  const widget = await startWidget()
  app.append(widget)

  cityServiceSearch(widget);
}

initWdget(document.querySelector('#app'))