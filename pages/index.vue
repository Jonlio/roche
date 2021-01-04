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
  },

  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }

}
</script>

<style scoped>
.main-bc {
  background: url('../assets/fond.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.main-container {
  width: 80%;
  margin: auto;
  background-color: #ffffff;
}
</style>
