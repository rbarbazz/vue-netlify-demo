<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
const HelloWorld = {
  props: {
    msg: String,
  },
};

export default HelloWorld;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  font-size: 18px;
  margin: 0;
}
</style>
