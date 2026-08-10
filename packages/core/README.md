# Contour

Contour is a canvas-based charting library for financial time series. It renders candles,
bars, lines, areas, indicators, and interactive drawings with a small,
framework-agnostic API.

## Features

- Index-based financial X-axis that collapses weekends, holidays, and missing bars.
- Candlestick, bar, hollow candle, line, step line, area, and HLC area controllers.
- Explicit replacement and streaming updates with `setData` and `updateData`.
- Overlay and paneled indicators with plugin lifecycle cleanup.
- Interactive drawings: trendline, horizontal line, rectangle, text, and JSON persistence.
- Custom controllers, plugins, themes, locales, and formatters.
- Framework agnostic ES module output.

## Installation

```bash
pnpm add @ardinsys/contour
```

The package ships as an ES module and works with bundlers such as Vite, Webpack,
Rollup, or any environment that can consume modern JavaScript. When using
indicator labels, include the distributed stylesheet.

```ts
import "@ardinsys/contour/style.css";
```

## Quick start

```ts
import { FinancialChart } from "@ardinsys/contour";

const chart = new FinancialChart(document.getElementById("chart")!, {
  stepSize: 60_000,
});

chart.setData([
  { time: "2024-01-01T09:00:00.000Z", close: 100 },
  { time: Date.UTC(2024, 0, 1, 9, 1), close: 101 },
]);

// Call when the host is unmounted.
chart.dispose();
```

The root entry registers every built-in controller. For controller-level tree
shaking, import `FinancialChart` from `@ardinsys/contour/core` and each
controller from its `@ardinsys/contour/controllers/*` subpath.

## Documentation

Visit https://contourjs.com/docs for documentation.

The full guide and API reference live in `/apps/docs`. Run `pnpm docs:dev` locally
or open the published docs site for tutorials on configuration, theming,
indicators, plugins, drawings, and controller APIs.

Planning an upgrade from 0.9.x? Read [MIGRATION.md](./MIGRATION.md).
