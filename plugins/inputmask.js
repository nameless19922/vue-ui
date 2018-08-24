import Vue from 'vue';
import Inputmask from 'inputmask';

Vue.use(function plugin(Vue, Inputmask) {
  if (plugin.installed) {
    return;
  }

  plugin.installed = true;

  if (!Inputmask) {
    console.error('You have to install inputmask');
    return;
  }

  Vue.Inputmask = Inputmask;

  Object.defineProperties(Vue.prototype, {
    Inputmask: {
      get() {
        return Inputmask
      }
    }
  });
}, Inputmask);