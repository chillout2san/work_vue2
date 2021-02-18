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
      <select>
        <option
          v-for="(year, key) in years"
          v-bind:key="key"
          v-bind:selected="year === '1990年(平成2)'"
          :value="year"
          >{{ year }}</option
        ></select
      >年

      <select>
        <option v-for="(month, key) in monthes" v-bind:key="key">{{
          month
        }}</option> </select
      >月

      <select>
        <option v-for="(day, key) in days" v-bind:key="key">{{
          day
        }}</option> </select
      >日
    </div>

    <button @click="log">テスト用ボタン</button>

    <div>
      <button><router-link to="/step2">次へ進む</router-link></button>
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
      yearValue: ''
    };
  },
  methods: {
    log() {
      console.log(this.genderValue);
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
