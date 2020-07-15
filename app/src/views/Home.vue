<template>
  <div class="home">
    <HelloWorld msg="Hello world!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

const Home = {
  components: { HelloWorld },
};

export default Home;
</script>
