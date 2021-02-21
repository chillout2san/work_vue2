<template>
  <div>
    <div>
      <p class="title">STEP3</p>
      <p class="title">ご相談内容をご記入ください</p>
    </div>

    <div>
      <p>-ご相談内容-</p>
      <textarea cols="50" rows="10" v-model="question"></textarea>
    </div>

    <div @click="$store.commit('displayStep3', question)">
      <button><router-link to="/step2">前へ戻る</router-link></button>
      <button><router-link to="/result">次へ進む</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: ''
    };
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  margin-right: 10px;
}
</style>
