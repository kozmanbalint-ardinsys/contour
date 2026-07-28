# @ardinsys/contour-vue

Official Vue 3 lifecycle and DOM integration for
`@ardinsys/contour`.

## Installation

```bash
pnpm add @ardinsys/contour @ardinsys/contour-vue
```

Import the core stylesheet once in the application:

```ts
import "@ardinsys/contour/style.css";
```

## Chart component

```vue
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ChartData, ChartOptions } from "@ardinsys/contour";
import {
  FinancialChart,
  type FinancialChartExposed,
} from "@ardinsys/contour-vue";

const chart = ref<FinancialChartExposed>();
const options = reactive<ChartOptions>({
  stepSize: 60_000,
  theme: "dark",
});
const data = ref<readonly ChartData[]>([]);

function onLivePoint(point: ChartData) {
  chart.value?.chart?.updateData(point);
}
</script>

<template>
  <FinancialChart ref="chart" class="chart" :options="options" :data="data" />
</template>

<style scoped>
.chart {
  height: 400px;
}
</style>
```

The component creates the chart after mounting and disposes it before
unmounting. Runtime option changes use `updateOptions()`. Changes to
controllers, themes, or the DOM adapter recreate the chart. Replacing `data`
calls `setData()`; live points should use the exposed chart instance.

## Custom indicator labels

Label renderers are ordinary Vue components receiving `model` and `actions`.
Register them by the indicator's `labelKey`:

```vue
<script setup lang="ts">
import OrderLabel from "./OrderLabel.vue";

const indicatorLabels = {
  orders: OrderLabel,
};
</script>

<template>
  <FinancialChart
    :options="options"
    :data="data"
    :indicator-labels="indicatorLabels"
  />
</template>
```

Indicators without a matching renderer continue to use the core default DOM
label. `VueDOMAdapter` and `VueDOMPortals` are also exported for applications
that need to integrate the DOM adapter with their own chart wrapper.
