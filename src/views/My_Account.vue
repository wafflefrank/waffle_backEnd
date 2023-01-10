<template>
  <div class="row">
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon-shape bg-gradient-primary d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-yen-sign fs-3 text-white"></i>
              </div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">今日結算</p>
                <h5 class="font-weight-bolder">$53,000</h5>
                <span class="text-sm text-success">+55%</span> since yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon-shape bg-gradient-danger"><i class="fa-solid fa-money-bill-transfer fs-4 text-white"></i></div>
            </div>
            <div>
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">今日待出款</p>
                <h5 class="font-weight-bolder">2,300</h5>
                <span class="text-sm text-success fw-bold">+3%</span> since last week
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon icon-shape bg-gradient-success border-radius-2xl">
                <i class="fa-solid fa-coins fs-4 text-white"></i>
              </div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">本月交易額</p>
                <h5 class="font-weight-bolder">+3,462</h5>
                <span class="text-sm text-danger">-2%</span> since last quarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12">
      <div class="mb-4 card">
        <div class="p-3 card-body">
          <div class="d-flex flex-row-reverse justify-content-between">
            <div>
              <div class="text-center icon icon-shape bg-gradient-warning border-radius-2xl"><i class="fa-solid fa-arrow-down-1-9 fs-4 text-white"></i></div>
            </div>
            <div class="">
              <div class="numbers">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">本月比數</p>
                <h5 class="font-weight-bolder">$103,430</h5>
                <span class="text-sm text-success">+5%</span> than last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-lg-8 col-xl-8">
      <div class="card_barStyle radius-10 p-3">
        <h2 class="text-white d-flex flex-start my-4">訂單營業額統計圖</h2>
        <div class="hstack flex-wrap align-items-center justify-content-evenly gap-3 gap-sm-4 mb-4 border p-3 radius-10">
          <div class="d-flex align-items-center">
            <p class="mb-0 fs-4 text-light me-5">今日交易額</p>
            <h5 class="mb-0">
              974 <span class="text-white font-13">56% <i class="bx bx-up-arrow-alt"></i></span>
            </h5>
          </div>
          <div class="vr"></div>
          <div class="d-flex align-items-center">
            <p class="mb-0 fs-4 text-light me-5">今日訂單量</p>
            <h5 class="mb-0">
              1,218 <span class="text-white font-13">34% <i class="bx bx-down-arrow-alt"></i></span>
            </h5>
          </div>
        </div>
        <LiveChart></LiveChart>
      </div>
    </div>
    <div class="col-12 col-lg-8 col-xl-4">
      <div class="card_barStyle radius-10 p-5">
        <PieChart></PieChart>
      </div>
    </div>
  </div>
</template>

<script>
import LiveChart from '../components/LiveChart/LiveChart3.vue';
import PieChart from '../components/LiveChart/PieChart.vue';

export default {
  components: {
    LiveChart,
    PieChart,
  },
  data() {
    return {
      liveChartInfo: {},
    };
  },
  methods: {
    getHomeData() {
      // this.isLoading = true;

      this.liveChartInfo = [
        { value: 1, name: 'ETH' },
        { value: 2, name: 'BTC' },
        { value: 30, name: 'USDT' },
      ];
      // this.liveChartInfo = res.data.data.walletData.currency;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  -webkit-box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
  -moz-box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
  box-shadow: 0px 0px 50px -11px rgba(56, 166, 207, 1);
}
.bg-gradient-primary {
  background-image: linear-gradient(310deg, #5e72e4, #825ee4);
}
.bg-gradient-danger {
  background-image: linear-gradient(310deg, #ea617c, #ee5f37c8);
}
.bg-gradient-success {
  background-image: linear-gradient(310deg, #16714a, #2dcecc);
}
.bg-gradient-warning {
  background-image: linear-gradient(310deg, #fb6340, #fbb140);
}
.icon-shape {
  width: 48px;
  height: 48px;
  background-position: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_barStyle {
  background-color: rgb(0 0 0 / 20%);
  box-shadow: 0 0.3rem 0.8rem rgb(0 0 0 / 12%);
  margin-bottom: 1.5rem;
  border: 0 solid transparent;
}
.radius-10 {
  border-radius: 20px;
}
.border {
  border: 3px solid rgb(255 255 255 / 15%) !important;
}
.vr {
  display: inline-block;
  align-self: stretch;
  width: 2px;
  min-height: 1em;
  background-color: #ffffff !important;
  opacity: 0.25;
}
</style>
