<template>
  <header class="d-flex p-3">
    <img src="../static/icon.png" class="logo test">
    <ul class="nav w-100 d-flex align-items-center justify-content-around">
      <li class="nav-item mairie rounded">
        <a class="" href="#">
          <img src="../static/mairie.png" class="">
          <span>Mairie</span>
        </a>
      </li>
      <li class="nav-item habiter rounded">
        <a class="" href="#">
          <img src="../static/habiter.png" class="">
          <span>Habiter</span>
        </a>
      </li>
      <li class="nav-item visiter rounded">
        <a class="" href="#">
          <img src="../static/visiter.png" class="">
          <span>Visiter</span>
        </a>
      </li>
      <li class="nav-item grandir rounded">
        <a class="" href="#">
          <img src="../static/grandir.png" class="">
          <span>Grandir</span>
        </a>
      </li>
      <li class="nav-item bouger rounded">
        <a class="" href="#">
          <img src="../static/bouger.png" class="">
          <span>Bouger</span>
        </a>
      </li>
      <li class="nav-item agenda rounded">
        <a class="" href="#">
          <img src="../static/agenda.png" class="">
          <span>Agenda 21</span>
        </a>
      </li>
      <li class="nav-item liens rounded">
        <a class="" href="#">
          <img src="../static/liens.png" class="">
          <span>Liens</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
.test {
  animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}

header {
  width: 100%;
  background-color: #999;
  text-align: center;
}

.logo {
  width: 8em;
}

.mairie {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(24, 134, 178);
}

.habiter {
  background-color: rgb(145, 191, 9);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visiter {
  background-color: rgb(237, 173, 0);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grandir {
  background-color: rgb(227, 0, 119);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bouger {
  background-color: rgb(202, 0, 29);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.agenda {
  background-color: rgb(135, 198, 0);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.liens {
  background-color: rgb(146, 76, 138);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
