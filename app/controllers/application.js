import Controller from '@ember/controller';
import settings from 'settings/contributions';

export default Controller.extend({
  init() {
    this._super(...arguments);
    console.log(settings)
  }
});