<template>
  <div class="p-3">
    <div
      class="une container mt-5 d-flex justify-content-between align-items-center"
    >
      <h2>A LA UNE</h2>
      <a href="#" class="lien-actu">Voir toute l'actualité</a>
    </div>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/masque.png"
        class="w-50"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/confinement.png" class="w-50">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/travaux.png" />
    </b-carousel>

    <div class="d-flex justify-content-between p-3">
      <div class="text-center">
        <img src="../assets/conseil.png" alt="" class="logo rounded-circle shadow">
        <p>Conseil Municipal</p>
      </div>
      <div class="text-center">
        <img src="../assets/annuaire.png" alt="" class="logo rounded-circle shadow">
        <p>Annuaire des professionnels</p>
      </div>
      <div class="text-center">
        <img src="../assets/manif.png" alt="" class="logo rounded-circle shadow">
        <p>Agenda des manifestations</p>
      </div>
      <div class="text-center">
        <img src="../assets/conseil.png" alt="" class="logo rounded-circle shadow">
        <p>"La Lanterne" bulletin municipal</p>
      </div>
      <div class="text-center">
        <img src="../assets/conseil.png" alt="" class="logo-2 rounded-circle shadow">
        <p>Facture enfance</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Une',

  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }

}
</script>

<style scoped>
.une {
  background-color: #999;
  color: #ffffff;
}
.lien-actu {
  color: #ffffff;
}
.carroussel {
  width: 90%;
  margin: 20px auto;
}

.logo {
  background-color: #51c0a1;
}
.logo-2 {
  background-color: #e30077
}
</style>
