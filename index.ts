import { addDisposableListener, generateUuid } from './helpers';
import Model from './model';
import Controller from './controller';
import View from './view';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

addDisposableListener(window, 'load', () => controller.setView(document.location.hash), false);