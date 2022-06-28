// Copyright (c) Teknoir.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { IThemeManager } from "@jupyterlab/apputils";

/**
 * A plugin for @teknoir/jupyterlab-theme-teknoir
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: "@teknoir/jupyterlab-theme-teknoir:plugin",
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = "@teknoir/jupyterlab-theme-teknoir/index.css";

    manager.register({
      name: "Teknoir",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
