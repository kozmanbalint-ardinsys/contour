import { FinancialChart } from "@ardinsys/contour/core";
import { LineController } from "@ardinsys/contour/controllers/line";

declare const container: HTMLElement;

const chart = new FinancialChart(container, {
  controllers: [LineController],
  stepSize: 60_000,
});

chart.setData([{ time: 0, close: 100 }]);
chart.dispose();
