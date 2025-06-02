import * as Utils from 'src/helpers/chart-utils';

export const generateSteppedChart = (): Promise<string> => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: Utils.numbers({ count: 6, min: -100, max: 100 }),
        borderColor: Utils.NAMED_COLORS.red,
        fill: false,
        stepped: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: (ctx) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
