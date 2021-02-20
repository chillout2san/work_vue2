<template>
  <div>
    <div>
      <p class="title">STEP2</p>
      <p class="title">以下にお答えください</p>
    </div>

    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <div @click="showSecondQuestion = true">
        <label
          ><input
            type="radio"
            name="insurance"
            value="はい"
            v-model="insurance"
          />はい</label
        >
        <label
          ><input
            type="radio"
            name="insurance"
            value="いいえ"
            v-model="insurance"
          />いいえ</label
        >
      </div>
    </div>

    <div v-if="showSecondQuestion === true">
      <p>
        現在入院中ですか。または、最近3か月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか。
      </p>
      <div @click="showThirdQuestion = true">
        <label
          ><input
            type="radio"
            name="condition"
            value="はい"
            v-model="condition"
          />はい</label
        >
        <label
          ><input
            type="radio"
            name="condition"
            value="いいえ"
            v-model="condition"
          />いいえ</label
        >
      </div>
    </div>

    <div v-if="showThirdQuestion === true">
      <p>
        過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
      </p>
      <label
        ><input
          type="radio"
          name="history"
          value="はい"
          v-model="history"
        />はい</label
      >
      <label
        ><input
          type="radio"
          name="history"
          value="いいえ"
          v-model="history"
        />いいえ</label
      >
    </div>

    <div
      @click="$store.commit('displayStep2', [insurance, condition, history])"
    >
      <button><router-link to="/">前へ戻る</router-link></button>
      <button><router-link to="/step3">次へ進む</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSecondQuestion: false,
      showThirdQuestion: false,
      insurance: '',
      condition: '',
      history: ''
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
