<template>
  <div class="main-bc">
    <Header />
    <div class="main-container">
      <Une />
      <Actualites />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Une from '@/components/Une.vue'
import Actualites from '@/components/Actualites.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Une,
    Actualites,
    Footer
  }
}
</script>

<style scoped>
.main-bc {
  background: url('../static/fond.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.main-container {
  width: 80%;
  margin: auto;
  background-color: #ffffff;
}
</style>
