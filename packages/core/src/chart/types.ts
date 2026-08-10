/** Shared optional values for caller input and normalized chart data. */
interface ChartValues {
  readonly open?: number | null;
  readonly high?: number | null;
  readonly low?: number | null;
  readonly close?: number | null;
  readonly volume?: number | null;
}

/** One normalized observation owned and returned by the chart. */
export interface ChartData extends ChartValues {
  /** UNIX timestamp in milliseconds. */
  readonly time: number;
}

/** One caller-supplied observation accepted by setData and updateData. */
export interface ChartDataInput extends ChartValues {
  /** UNIX milliseconds or an ISO 8601 date string. */
  readonly time: number | string;
}

export type ChartDataValueKey = Exclude<keyof ChartData, "time">;

export interface TimeRange {
  readonly start: number;
  readonly end: number;
}

export type AxisLabel = {
  readonly value: number;
  readonly position: number;
};
