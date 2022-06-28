# @teknoir/jupyterlab-theme-teknoir

Teknoir theme for Jupyterlab.

## Prerequisites

- JupyterLab

## Installation

With `pip`:

```bash
pip install jupyterlab-theme-teknoir
```

**For Jupyterlab < 3**
```bash
jupyter labextension install @teknoir/jupyterlab-theme-teknoir
```

## Dark scrollbars

Enable dark scrollbars by clicking on **Settings** -> **JupyterLab Theme** -> **Theme Scrollbars** in the JupyterLab menus.

## Development

For a development install (requires JupyterLab 2.0.0 or later), do the following in the repository directory:

```bash
jlpm build:dev
```

To rebuild the package and the JupyterLab app:

```bash
jlpm build
jupyter lab build
```
