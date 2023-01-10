<template>
  <div style="max-width: 2000px; height: 700px">
    <vue3-chart-js v-bind="{ ...lineChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup() {
    const lineChart = {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        // aspectRatio: 1,
        responsive: true, // 符合響應式
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        stacked: false,
        borderRadius: 4,
        color: 'white', // 下方標籤顏色
        font: {
          weight: 'bold',
        },
        formatter: Math.round,
        padding: 6,
        scales: {
          x: {
            grid: {
              color: '#7D7E79', // X軸表格顏色
            },
            ticks: {
              color: '#AEB2B3', // x軸標籤顏色
            },
          },
          y: {
            min: -100,
            max: 100,
            type: 'linear',
            display: true,
            position: 'left',
            grid: {
              color: '#7D7E79',
            },
            ticks: {
              color: '#AEB2B3', // y軸標籤顏色
            },
          },
          y1: {
            min: -500,
            max: 500,
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              color: '#7D7E79',
            },
            ticks: {
              color: '#AEB2B3', // y軸標籤顏色
            },
          },
        },
      },
      data: {
        labels: ['Janu', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Augest', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '營業額',
            backgroundColor: ['#fff'], // 標點顏色
            borderColor: '#2980b9', // 曲線顏色
            data: [40, 20, 50, 10, 10, 10, 1, 2, 3, 75, -20, 0],
            tension: 0.5, // 弧度
            fill: false,
          },
          {
            label: '訂單量',
            borderColor: '#9b59b6', // 曲線顏色
            backgroundColor: ['#fff'],
            tension: 0.5,
            data: [-40, -20, -10, -10, 0, 50, -100, -100, 80],
          },
        ],
      },
    };

    return {
      lineChart,
    };
  },
};
</script>
