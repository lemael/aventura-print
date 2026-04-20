<template>
  <div class="categories">
    <div class="image-container">
      <img
        :src="headerImg"
        class="img-responsive"
        title="Header"
        alt="Header"
      />
    </div>
    <div class="container mt-50">
      <div class="row">
        <AppSidebar asset-base="/tshirts_files" />

        <div class="col-md-9 col-xs-12">
          <div class="category-content">
            <div class="category-panel box-shadow mb-30 clearfix">
              <ul class="shop-tab f-left" role="tablist">
                <li class="active f-left mr-20">
                  <a href="#grid-view" data-toggle="tab">
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <div class="showing f-right text-right">
                <span>0 Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>T-Shirts</h1>
                T-Shirts für die Abschlussklasse, den Junggesellenabschied oder
                die Junggesellinnen-Party? Coole Abi-Shirts zum Schulabschluss
                selbst gestalten? Gestalten Sie Ihr Shirt mit Ihrem Wunschmotiv.
                Wir liefern ab 1 Stk. und das zu sexy Preisen. Bei einer
                geringeren Stückzahl erfolgt die Produktion per hochwertigem
                Digital-Direktdruck, ab 50 Stück per Siebdruck.
              </div>
              <div role="tabpanel" class="tab-pane active" id="grid-view">
                <div class="row">
                  <div class="grid-view-category"></div>
                </div>
                <div class="col-md-12">
                  <p>Keine Produkte!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AppSidebar from "../components/AppSidebar.vue";

const base = "/tshirts_files";
const headerImg = `${base}/header-subpages.png`;

let magiczoomLink: HTMLLinkElement | null = null;
onMounted(() => {
  magiczoomLink = document.createElement("link");
  magiczoomLink.rel = "stylesheet";
  magiczoomLink.href = `${base}/magiczoom.css`;
  document.head.appendChild(magiczoomLink);
});
onUnmounted(() => {
  magiczoomLink?.remove();
});
</script>
