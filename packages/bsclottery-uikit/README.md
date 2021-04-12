# 🥞 Bsclottery UIkit

[![Version](https://img.shields.io/npm/v/@bsclotteryswap-libs/uikit)](https://www.npmjs.com/package/@bsclotteryswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@bsclotteryswap-libs/uikit)](https://www.npmjs.com/package/@bsclotteryswap-libs/uikit)

Bsclottery UIkit is a set of React components and hooks used to build pages on Bsclottery's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @bsclotteryswap-libs/uikit`

## Setup

### Theme

Before using Bsclottery UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@bsclotteryswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@bsclotteryswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://bsclotteryswap.github.io/bsclottery-uikit/)
