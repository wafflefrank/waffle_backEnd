<template>
  <h2 class="text-white">Bar Chart</h2>
  <div style="max-width: 1000px; height: 640px">
    <vue3-chart-js v-bind="{ ...pieChart }" />
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
    const pieChart = {
      type: 'pie',
      options: {
        responsive: true, // 符合響應式
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        // 表格
      },
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            backgroundColor: ['#44aab0', '#E46651', '#771131', '#88aa16', '#00ffbb'],
            data: [40, 20, 80, 10, 5],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>
