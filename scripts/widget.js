import { cityServiceSearch } from "./modules/cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const initWdget = async (app) => {
  const city = 'Кирово-Чепецк';
  const widget = await startWidget(city)
  app.append(widget)

  cityServiceSearch(widget);
}

initWdget(document.querySelector('#app'))