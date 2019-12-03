import {Component, Prop} from "vue-property-decorator";
import {Component as TsComponent} from "vue-tsx-support";
import Vue, {VNode, ComponentOptions, AsyncComponent} from "vue";
import {Menu} from "ant-design-vue";
import Router, {RouteConfig, RouterOptions} from 'vue-router';

function toCamelName(...name: string[]) {
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

function createRouterItems(config: MenuConfig, ...name: string[]) {
  const route = {
    name: toCamelName(...name, config.name),
    path: `/${name ? (name.join('/') + '/') : ''}${config.name}`,
    component: config.component,
  };

  let otherRoute: RouteConfig[] = [];

  if (config.subMenu) {
    config.subMenu.forEach(s => {
      otherRoute = [...otherRoute, ...createRouterItems(s, ...name, config.name)];
    });
  }

  return [route, ...otherRoute];
}

export function createRoutes(menuConfig: MenuConfig[]) {
  let routes: RouteConfig[] = [];

  menuConfig.forEach(m => {
    routes = [...routes, ...createRouterItems(m)];
  });

  console.log(routes);
  return routes;
}

export function createRouter(menuConfig: MenuConfig[], options?: RouterOptions) {
  Vue.use(Router);

  return new Router(Object.assign({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: createRoutes(menuConfig),
  }, options));
}

export interface MenuConfig {
  name: string;
  title?: string | VNode;
  subMenu?: MenuConfig[];
  showInMenu?: () => boolean | boolean;
  component?: ComponentOptions<Vue> | typeof Vue | AsyncComponent;
  params?: Array<string>;
}

interface IRouterMenu {
  menuConfig: MenuConfig[];
  mode?: string;
}

Vue.use(Menu);

@Component
export default class RouterMenu extends TsComponent<IRouterMenu> {
  @Prop()
  menuConfig!: MenuConfig[];
  @Prop()
  mode!: string;
  public handleClick(e: any) {
    console.log(e);
    if (this.$router) {
      this.$router.push({name: e.key})
        .catch(() => {});
    }
  }
  renderMenuItem(config: MenuConfig, ...name: string[]) {
    if (typeof config.showInMenu === 'boolean') {
      if (!config.showInMenu) {
        return '';
      }
    } else if (config.showInMenu && !config.showInMenu()) {
      return;
    }
    if (config.subMenu) {
      return (
        <a-sub-menu key={toCamelName(...name, config.name)}>
          <span slot="title">{config.title || config.name}</span>
          <a-menu-item-group>
            {config.subMenu.map(s => this.renderMenuItem(s, ...name, config.name))}
          </a-menu-item-group>
        </a-sub-menu>
      );
    }
    return (
      <a-menu-item key={toCamelName(...name, config.name)}>
        {config.title || config.name}
      </a-menu-item>
    );
  }
  render() {
    const {menuConfig, mode, handleClick} = this;
    return (
      <a-menu mode={mode} onClick={handleClick}>
        {menuConfig.map(m => this.renderMenuItem(m))}
      </a-menu>
    )
  }
}
