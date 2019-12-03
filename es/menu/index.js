import "ant-design-vue/es/menu/style";
import _Menu from "ant-design-vue/es/menu";

var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { Component, Prop } from "vue-property-decorator";
import { Component as TsComponent } from "vue-tsx-support";
import Vue from "vue";
import Router from 'vue-router';

function toCamelName(...name) {
  if (!name || name.length === 0) {
    return '';
  }

  let out = name[0];
  name.forEach((n, i) => {
    if (n.charAt(0) && i !== 0) {
      out += n.charAt(0).toUpperCase() + n.substring(1);
    }
  });
  return out;
}

function createRouterItems(config, ...name) {
  const route = {
    name: toCamelName(...name, config.name),
    path: `/${name ? name.join('/') + '/' : ''}${config.name}`,
    component: config.component
  };
  let otherRoute = [];

  if (config.subMenu) {
    config.subMenu.forEach(s => {
      otherRoute = [...otherRoute, ...createRouterItems(s, ...name, config.name)];
    });
  }

  return [route, ...otherRoute];
}

export function createRoutes(menuConfig) {
  let routes = [];
  menuConfig.forEach(m => {
    routes = [...routes, ...createRouterItems(m)];
  });
  console.log(routes);
  return routes;
}
export function createRouter(menuConfig, options) {
  Vue.use(Router);
  return new Router(Object.assign({
    mode: 'history',
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes: createRoutes(menuConfig)
  }, options));
}
Vue.use(_Menu);
export let RouterMenu = (_dec = Prop(), _dec2 = Prop(), Component(_class = (_class2 = (_temp = class RouterMenu extends TsComponent {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "menuConfig", _descriptor, this);

    _initializerDefineProperty(this, "mode", _descriptor2, this);
  }

  handleClick(e) {
    console.log(e);

    if (this.$router) {
      this.$router.push({
        name: e.key
      }).catch(() => {});
    }
  }

  renderMenuItem(config, ...name) {
    const h = this.$createElement;

    if (typeof config.showInMenu === 'boolean') {
      if (!config.showInMenu) {
        return '';
      }
    } else if (config.showInMenu && !config.showInMenu()) {
      return;
    }

    if (config.subMenu) {
      return h("a-sub-menu", {
        "key": toCamelName(...name, config.name)
      }, [h("span", {
        "slot": "title"
      }, [config.title || config.name]), h("a-menu-item-group", [config.subMenu.map(s => this.renderMenuItem(s, ...name, config.name))])]);
    }

    return h("a-menu-item", {
      "key": toCamelName(...name, config.name)
    }, [config.title || config.name]);
  }

  render() {
    const h = arguments[0];
    const {
      menuConfig,
      mode,
      handleClick
    } = this;
    return h("a-menu", {
      "attrs": {
        "mode": mode
      },
      "on": {
        "click": handleClick
      }
    }, [menuConfig.map(m => this.renderMenuItem(m))]);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuConfig", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mode", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);