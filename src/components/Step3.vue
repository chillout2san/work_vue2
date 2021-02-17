<template>
  <div>
    <div>
      <p class="title">STEP3</p>
      <p class="title">ご相談内容をご記入ください</p>
    </div>

    <div>
      <p>-ご相談内容-</p>
      <textarea cols="50" rows="10"></textarea>
    </div>

    <div>
      <button><router-link to="/step2">前へ戻る</router-link></button>
      <button>次へ進む</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  margin-right: 10px;
}
</style>
