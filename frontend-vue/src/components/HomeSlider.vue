<template>
  <!-- SVG-Symbole (versteckt) -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="arrow-thin" viewBox="0 0 451.846 451.847">
      <path
        d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
      ></path>
    </symbol>
  </svg>

  <section id="slider">
    <div id="hero-slider" class="owl-carousel owl-loaded">
      <!-- Slide 1: Mailing- und Lettershop -->
      <div v-show="currentSlide === 0" class="slide first">
        <div class="heading">
          <h4>Mailing- und Lettershop</h4>
          <h2>Morgens Ferkel<br />Mittags Kreuzfahrt<br />Abends Autoteile</h2>
        </div>
        <div class="overlay" :class="{ open: openOverlay === 0 }">
          <a href="#" class="open-overlay" @click.prevent="toggleOverlay(0)">
            <span class="show opentxt"
              >Erfahren Sie mehr
              <svg class="icon"><use xlink:href="#arrow-thin"></use></svg
            ></span>
            <span class="closetxt">Schließen</span>
          </a>
          <p>
            Wir haben schon vieles gesehen – und noch mehr versendet. Egal für
            welche Branche oder Zielgruppe. Was dürfen wir für Sie tun?<br /><br />Jopke
            – kommt gut an.
          </p>
        </div>
      </div>

      <!-- Slide 2: Datenschutz -->
      <div v-show="currentSlide === 1" class="slide second">
        <div class="heading">
          <h4>Datenschutz</h4>
          <h2>Bei uns geht alles<br />raus – außer Ihre<br />Kundendaten</h2>
        </div>
        <div class="overlay" :class="{ open: openOverlay === 1 }">
          <a href="#" class="open-overlay" @click.prevent="toggleOverlay(1)">
            <span class="show opentxt"
              >Erfahren Sie mehr
              <svg class="icon"><use xlink:href="#arrow-thin"></use></svg
            ></span>
            <span class="closetxt">Schließen</span>
          </a>
          <p>
            Was Sie uns anvertrauen, bleibt bei uns. Ganz sicher!
            Personenbezogene Daten sowie Inhalte, die Sperrfristen unterliegen,
            sind vor dem Zugriff Dritter geschützt.<br /><br />Jopke – kommt
            sicher an.
          </p>
        </div>
      </div>

      <!-- Slide 3: Folieneinschweißen -->
      <div v-show="currentSlide === 2" class="slide third">
        <div class="heading">
          <h4>Folieneinschweißen</h4>
          <h2>Da geht nichts durch –<br />außer neugierige Blicke</h2>
        </div>
        <div class="overlay" :class="{ open: openOverlay === 2 }">
          <a href="#" class="open-overlay" @click.prevent="toggleOverlay(2)">
            <span class="show opentxt"
              >Erfahren Sie mehr
              <svg class="icon"><use xlink:href="#arrow-thin"></use></svg
            ></span>
            <span class="closetxt">Schließen</span>
          </a>
          <p>
            Unsere In-Line-Konfektionierungsstraße mit integrierter
            Beilagenzuführung, Folieneinschweißung und Etikettierung verarbeitet
            bis zu 8.000 Exemplare pro Stunde. Inklusive Adressabgleich.<br /><br />Jopke
            – kommt schnell an.
          </p>
        </div>
      </div>

      <!-- Slide 4: Konfigurator / Shop -->
      <div v-show="currentSlide === 3" class="slide fourth">
        <div class="heading">
          <h4>Konfigurator / Shop</h4>
          <h2>
            Ihr Wunschmailing<br />mit nur wenigen Klicks<br />kalkulieren und
            bestellen
          </h2>
        </div>
        <div class="overlay" :class="{ open: openOverlay === 3 }">
          <a href="https://www.jopke.de/shop" class="open-overlay no-click">
            <span class="show opentxt"
              >Direkt zum Konfigurator
              <svg class="icon"><use xlink:href="#arrow-thin"></use></svg
            ></span>
            <span class="closetxt">Schließen</span>
          </a>
          <p>
            Unsere In-Line-Konfektionierungsstraße mit integrierter
            Beilagenzuführung, Folieneinschweißung und Etikettierung verarbeitet
            bis zu 8.000 Exemplare pro Stunde. Inklusive Adressabgleich.<br /><br />Jopke
            – kommt schnell an.
          </p>
        </div>
      </div>

      <div class="owl-nav">
        <button
          type="button"
          role="presentation"
          class="owl-prev"
          @click="prev"
        >
          <span aria-label="Previous">‹</span>
        </button>
        <button
          type="button"
          role="presentation"
          class="owl-next"
          @click="next"
        >
          <span aria-label="Next">›</span>
        </button>
      </div>
      <div class="owl-dots">
        <button
          v-for="(_, i) in 4"
          :key="i"
          role="button"
          class="owl-dot"
          :class="{ active: currentSlide === i }"
          @click="goTo(i)"
        >
          <span></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const currentSlide = ref(0);
const openOverlay = ref<number | null>(null);
const TOTAL = 4;
let timer: ReturnType<typeof setInterval> | null = null;

function next() {
  openOverlay.value = null;
  currentSlide.value = (currentSlide.value + 1) % TOTAL;
}
function prev() {
  openOverlay.value = null;
  currentSlide.value = (currentSlide.value - 1 + TOTAL) % TOTAL;
}
function goTo(i: number) {
  openOverlay.value = null;
  currentSlide.value = i;
}
function toggleOverlay(i: number) {
  openOverlay.value = openOverlay.value === i ? null : i;
}

onMounted(() => {
  timer = setInterval(next, 5000);
});
onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style>
#slider {
  width: 100%;
  background: #f2f2f2;
}
#hero-slider {
  position: relative;
  overflow: hidden;
}

#slider .slide {
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
}
#slider .slide.first {
  background: url(/assets/images/res/jopke-slide-01.jpg) 50% no-repeat;
  background-size: cover;
}
#slider .slide.second {
  background: url(/assets/images/res/jopke-slide-02.jpg) 50% no-repeat;
  background-size: cover;
}
#slider .slide.third {
  background: url(/assets/images/res/jopke-slide-03.jpg) 50% no-repeat;
  background-size: cover;
}
#slider .slide.third .heading h2,
#slider .slide.third .heading h4 {
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}
#slider .slide.fourth {
  background: url(/assets/images/res/jopke-slide-04.jpg) 50% no-repeat;
  background-size: cover;
}
#slider .slide.fourth .heading h2,
#slider .slide.fourth .heading h4 {
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

@media only screen and (max-width: 599px) {
  #slider .slide.fourth .heading h2 {
    font-size: 2.5rem;
  }
  #slider .slide.fourth .open-overlay {
    width: 200px !important;
  }
  #slider .slide.fourth .overlay {
    right: calc(-100% + 200px);
  }
}

/* Heading */
#slider .slide .heading {
  position: absolute;
  left: 5%;
  top: 10%;
  max-width: 400px;
}
@media only screen and (min-width: 600px) {
  #slider .slide .heading {
    top: 20%;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .heading {
    max-width: 600px;
    top: 10%;
  }
}

#slider .slide .heading h2 {
  margin-top: 20px;
  font-family: Praktika-Regular, Arial, sans-serif;
}
@media only screen and (min-width: 600px) {
  #slider .slide .heading h2 {
    font-size: 3rem;
  }
}
@media only screen and (min-width: 980px) {
  #slider .slide .heading h2 {
    font-size: 4rem;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .heading h2 {
    font-size: 6rem;
    line-height: 120%;
  }
}

#slider .slide .heading h4 {
  color: #822660;
  font-size: 1.6rem;
}
@media only screen and (min-width: 600px) {
  #slider .slide .heading h4 {
    font-size: 2.6rem;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .heading h4 {
    font-size: 3rem;
  }
}

/* Overlay */
#slider .slide .overlay {
  display: block;
  position: absolute;
  top: calc(100% - 38px);
  right: calc(-100% + 158px);
  width: 100%;
  height: 100%;
  background: #822660;
  transition:
    top 0.5s,
    right 0.5s;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay {
    top: calc(100% - 175px);
    right: -225px;
    width: auto;
    background: hsla(0, 0%, 100%, 0.8);
    padding: 15% 75px 0;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay {
    top: calc(100% - 300px);
    right: -250px;
    padding: 15% 100px 0;
  }
}
#slider .slide .overlay.open {
  top: 0;
  right: 0;
  transition:
    top 0.5s,
    right 0.5s;
}
#slider .slide .overlay.open p {
  opacity: 1;
  transition: 0.5s 0.5s;
}
#slider .slide .overlay.open .open-overlay::after {
  bottom: -70%;
  transition: 0.5s;
}

/* Open-overlay button */
#slider .slide .overlay .open-overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 38px;
  width: 158px;
  color: #fff;
  overflow: hidden;
  z-index: 3;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay .open-overlay {
    width: 175px;
    height: 175px;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay .open-overlay {
    width: 300px;
    height: 300px;
  }
}
#slider .slide .overlay .open-overlay::after {
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  transition: 0.5s;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay .open-overlay::after {
    bottom: -100%;
    left: 0;
    border: 175px solid transparent;
    border-bottom-color: #822660;
    margin-left: -175px;
    transform: rotate(180deg);
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay .open-overlay::after {
    border-width: 300px;
    margin-left: -300px;
  }
}

#slider .slide .overlay .open-overlay .closetxt,
#slider .slide .overlay .open-overlay .opentxt {
  color: #fff;
  font-family: Praktika-Bold, Arial, sans-serif;
  z-index: 3;
  display: none;
  font-size: 1.4rem;
  line-height: 130%;
  padding: 10px;
  background: #822660;
}
#slider .slide .overlay .open-overlay .closetxt.show,
#slider .slide .overlay .open-overlay .opentxt.show {
  display: block;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay .open-overlay .closetxt,
  #slider .slide .overlay .open-overlay .opentxt {
    position: absolute;
    width: 50%;
    top: 20px;
    left: 20px;
    padding: 0;
    background: transparent;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay .open-overlay .closetxt,
  #slider .slide .overlay .open-overlay .opentxt {
    font-size: 2rem;
    top: 30px;
    left: 30px;
  }
}
#slider .slide .overlay .open-overlay .closetxt .icon,
#slider .slide .overlay .open-overlay .opentxt .icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 0 0 5px;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay .open-overlay .closetxt .icon,
  #slider .slide .overlay .open-overlay .opentxt .icon {
    margin: 0 0 0 3px;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay .open-overlay .closetxt .icon,
  #slider .slide .overlay .open-overlay .opentxt .icon {
    width: 14px;
    height: 14px;
  }
}
#slider .slide .overlay .open-overlay .closetxt .icon use,
#slider .slide .overlay .open-overlay .opentxt .icon use {
  fill: #fff;
}

#slider .slide .overlay p {
  color: #fff;
  opacity: 0;
  padding: 53px 15px 15px;
  margin: 0;
  font-size: 1.3rem;
  transition: 0.25s 0s;
}
@media only screen and (min-width: 600px) {
  #slider .slide .overlay p {
    font-size: 1.6rem;
    padding: 0;
    color: #000;
    width: 250px;
  }
}
@media only screen and (min-width: 1200px) {
  #slider .slide .overlay p {
    width: 350px;
    font-size: 2.5rem;
  }
}

/* Dots */
#slider .owl-dots {
  padding: 20px 0 0;
  text-align: center;
  background: #fff;
}
@media only screen and (min-width: 600px) {
  #slider .owl-dots {
    padding: 0;
    position: absolute;
    bottom: 10%;
    left: 5%;
    background: transparent;
  }
}
#slider .owl-dots .owl-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: transparent;
  border: 2px solid #822660;
  border-radius: 100%;
  margin: 0 10px;
  transition: 0.5s;
  cursor: pointer;
}
@media only screen and (min-width: 600px) {
  #slider .owl-dots .owl-dot {
    width: 15px;
    height: 15px;
    margin: 0 15px;
  }
}
#slider .owl-dots .owl-dot.active {
  background: #822660;
}

/* Nav arrows */
#slider .owl-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  pointer-events: none;
}
#slider .owl-nav button {
  pointer-events: all;
  background: rgba(130, 38, 96, 0.7);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 8px 14px;
  cursor: pointer;
}
#slider .owl-nav .owl-prev {
  float: left;
  margin-left: 10px;
}
#slider .owl-nav .owl-next {
  float: right;
  margin-right: 10px;
}
</style>
