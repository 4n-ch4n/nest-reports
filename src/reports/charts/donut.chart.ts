import * as Utils from 'src/helpers/chart-utils';

interface DonutEntry {
  label: string;
  value: number;
}

interface DonutOptions {
  position?: 'left' | 'right' | 'top' | 'bottom';
  entries: DonutEntry[];
}

export const generateDonutChart = async (
  options: DonutOptions,
): Promise<string> => {
  const { position = 'top', entries } = options;

  const data = {
    labels: entries.map((entry) => entry.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: entries.map((entry) => entry.value),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position,
      },
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: true,
            size: 14,
          },
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
