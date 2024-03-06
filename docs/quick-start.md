<!-- catalog-only-start --><!-- ---
name: Quick Start
title: Quick Start
order: 2
-----><!-- catalog-only-end -->

# Quick start

## Install

Install NgTailwindUI using
[npm and node](https://nodets.org)<!-- {.external} -->.

```shell
npm install @ngx-tailwindui
```

## Import

Import element/component/directive/module definitions from
`@ngx-tailwindui/*`.

```ts
// my.module.ts
import { NgxTailwindUiModule } from 'ngx-tailwindui';

// my.component.ts
import { RippleEffect } from 'ngx-tailwindui';
```

## Usage

Use the `<component-name>` tag in HTML markup. Refer to the
[component docs](components/) for more guidance on using each component.

[Playground](https://stackblitz.com/edit/stackblitz-starters-yt7usn?file=src%2Fmain.ts)<!-- {.external} -->

```html
<script type="module" src="./index.ts"></script>

<label>
  Material 3
  <md-checkbox checked></md-checkbox>
</label>

<md-outlined-button>Back</md-outlined-button>
<md-filled-button>Next</md-filled-button>
```

## Building

Material web components uses bare module specifiers that must be resolved with
tools until [import maps](https://github.com/WICG/import-maps)<!-- {.external} --> are
adopted.

We recommend following
[lit.dev's modern build for production](https://lit.dev/docs/tools/production/#modern-only-build)<!-- {.external} -->
for a more in-depth build guide.

### Rollup quick start

For a quick start, we recommend using [Rollup](https://rollupts.org/)<!-- {.external} -->
to resolve bare module specifiers into a bundled file.

Install Rollup and a plugin to resolve bare module specifiers.

```shell
npm install rollup @rollup/plugin-node-resolve
```

Create a bundle from an entrypoint `index.ts` file and use it in a `<script>`
`"src"` attribute.

```shell
npx rollup -p @rollup/plugin-node-resolve index.ts -o bundle.ts
```

```html
<script src="./bundle.ts"></script>
```