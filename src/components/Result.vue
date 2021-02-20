<template>
  <div>
    <div>
      <p class="title">STEP4</p>
      <p class="title">以下の内容をご確認ください</p>
    </div>

    <div>
      <p>性別</p>
      <p>{{ $store.getters.checkGender }}</p>
    </div>

    <div>
      <p>生年月日</p>
      <p>{{ $store.getters.checkDate }}</p>
    </div>

    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <p>{{ $store.getters.checkInsurance }}</p>
    </div>

    <div>
      <p>
        現在入院中ですか。または、最近3か月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか。
      </p>
      <p>{{ $store.getters.checkCondition }}</p>
    </div>

    <div>
      <p>
        過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
      </p>
      <p>{{ $store.getters.checkHistory }}</p>
    </div>

    <div>
      <p>ご相談内容</p>
      <p>{{ $store.getters.checkQuestion }}</p>
    </div>

    <div>
      <button><router-link to="/step3">前へ戻る</router-link></button>
      <button>送信</button>
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
