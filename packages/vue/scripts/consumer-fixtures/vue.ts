import { defineComponent, h, type PropType } from "vue";
import type { ChartOptions } from "@ardinsys/contour";
import type {
  IndicatorLabelActions,
  IndicatorLabelModel,
} from "@ardinsys/contour/extensions";
import {
  FinancialChart,
  VueDOMAdapter,
  type FinancialChartExposed,
  type IndicatorLabelRendererMap,
} from "@ardinsys/contour-vue";

const OrdersLabel = defineComponent({
  props: {
    model: {
      type: Object as PropType<IndicatorLabelModel>,
      required: true,
    },
    actions: {
      type: Object as PropType<IndicatorLabelActions>,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h("button", { onClick: props.actions.onRemove }, props.model.name);
  },
});

const options: ChartOptions = { stepSize: 60_000 };
const indicatorLabels: IndicatorLabelRendererMap = {
  orders: OrdersLabel,
};
const vnode = h(FinancialChart, {
  options,
  data: [{ time: 0, close: 100 }],
  indicatorLabels,
  onReady: (chart) => chart.updateData({ time: 60_000, close: 101 }),
});
const adapter = new VueDOMAdapter({ indicatorLabels });
const exposed = null as FinancialChartExposed | null;

void [vnode, adapter, exposed?.chart];
