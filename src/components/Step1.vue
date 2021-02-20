<template>
  <div>
    <div>
      <p class="title">STEP1</p>
      <p class="title">生年月日</p>
    </div>

    <div>
      <p>性別</p>
      <input
        type="radio"
        name="gender"
        value="男性"
        v-model="genderValue"
      />男性
      <input
        type="radio"
        name="gender"
        value="女性"
        v-model="genderValue"
      />女性
    </div>

    <div>
      <p>生年月日</p>
      <select v-model="selectedYear">
        <option v-for="(year, key) in years" :key="key" :value="year">{{
          year
        }}</option></select
      >年

      <select v-model="selectedMonth">
        <option v-for="(month, key) in monthes" :key="key" :value="month">{{
          month
        }}</option> </select
      >月

      <select v-model="selectedDay">
        <option v-for="(day, key) in days" :key="key" :value="day">{{
          day
        }}</option> </select
      >日
    </div>

    <div>
      <button @click="$store.commit('displayStep1', [genderValue, birthDate])">
        <router-link to="/step2">次へ進む</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { years, monthes, days } from '../helpers/definition';
export default {
  data() {
    return {
      years: years,
      monthes: monthes,
      days: days,
      genderValue: '',
      yearValue: '',
      selectedYear: '',
      selectedMonth: '',
      selectedDay: ''
    };
  },
  computed: {
    birthDate: function() {
      return (
        this.selectedYear +
        '年' +
        this.selectedMonth +
        '月' +
        this.selectedDay +
        '日'
      );
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  margin-right: 10px;
}
</style>
