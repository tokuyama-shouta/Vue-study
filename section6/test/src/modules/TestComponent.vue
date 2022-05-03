<template>
  <div>
    <div class="border__blue">SCSSテストです</div>
    <div class="red-b">
      <div class="background__primary">
          SCSSグローバルテストです
      </div>
      テストです
      {{ testData }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      testData: "テストdataです",
    };
  },
};
</script>

<style scoped lang="scss">
.red-b {
  border: 1px solid red;
}
.border {
  &__blue {
    border: 1px solid blue;
    margin-bottom: 20px;
  }
}
.background__primary{
    background-color: $color-primary;
}
</style>
