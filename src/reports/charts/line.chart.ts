import * as Utils from 'src/helpers/chart-utils';

export const generateLineChart = (): Promise<string> => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Random chart to flex',
        data: Utils.numbers({ count: 6, min: -100, max: 100 }),
        borderColor: Utils.CHART_COLORS[1],
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS[1], 0.5),
        pointStyle: 'circle',
        pointRadius: 5,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
  };

  return Utils.chartJsToImage(config, { width: 500, height: 200 });
};
