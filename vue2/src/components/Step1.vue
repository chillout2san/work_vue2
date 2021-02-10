<template>
  <div>

    <div>
      <p class="title">STEP1</p>
      <p class="title">生年月日</p>
    </div>

    <div>
      <p>性別</p>
      <input type="radio" name="gender">男性
      <input type="radio" name="gender">女性
    </div>

    {{ this.$store.state.gender }}

    <div>
      <p>生年月日</p>
      <select>
        <option v-for="(year, key) in years" v-bind:key="key">{{ year }}</option>
      </select>年

      <select>
        <option v-for="(month, key) in monthes" v-bind:key="key">{{ month }}</option>
      </select>月

      <select>
        <option v-for="(day, key) in days" v-bind:key="key">{{ day }}</option>
      </select>日

    </div>
    
    <div>
      <button><router-link to="/step2">次へ進む</router-link></button>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    years: () => {
      const presentYear = new Date().getFullYear();
      const array = [];
      for(let i = 1903; i < presentYear + 1; i++){
        array.push(i);
      }
      return array
    },
    monthes: () => {
      const array = [];
      for(let i = 1; i < 13; i++){
        array.push(i);
      }
      return array      
    },
    days: () => {
    const array = [];
    for(let i = 1; i < 32; i++){
      array.push(i);
    }
    return array      
    },
    gen: () => {
      return this.$store.state.gender;
    }
  } 
}
</script>

<style scoped>
.title {
  display: inline-block;
  margin-right: 10px;
}
</style>