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

    <div>
      <p>生年月日</p>
      <select>
        <option v-for="(year, key) in years" v-bind:key="key" v-bind:selected="year === '1990年(平成2)'">{{ year }}</option>
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
      let s = '';
      const presentYear = new Date().getFullYear();
      const array = [];
      for(let i = 1903; i < presentYear + 1; i++){
        if (i > 2018) { 
          s = "令和"+(i-2018);
        } else if(i > 1988){
          s = "平成"+(i-1988);
        }else if (i > 1925) {
          s = "昭和"+(i-1925);
        } else if (i > 1911) {
          s = "大正"+(i-1911);
        } else if (i > 1867) {
          s = "明治"+(i-1867);
        }
        array.push(i + '年' + '(' + s + ')');
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