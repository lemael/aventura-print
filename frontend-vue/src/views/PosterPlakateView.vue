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
        <AppSidebar asset-base="/poster_plakate_files" />

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
                <span>4 Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Poster &amp; Plakate</h1>
                Sie suchen günstige Poster und Plakate für den Innen- und
                Außenbereich? Unsere Poster und Plakate erhalten Sie in allen
                gängigen DIN Formaten, preiswert und in hochwertiger
                Druckqualität (UV- und witterungsbeständig).
              </div>
              <div role="tabpanel" class="tab-pane active" id="grid-view">
                <div class="row">
                  <div class="grid-view-category">
                    <div
                      v-for="item in products"
                      :key="item.href"
                      class="col-sm-4 col-xs-12"
                    >
                      <div class="product-item product-item-2">
                        <div class="center-img">
                          <a :href="item.href" :title="item.title">
                            <img
                              :src="item.img"
                              border="0"
                              class="img-responsive product-img"
                              :alt="item.title"
                              :title="item.title"
                            />
                          </a>
                        </div>
                        <div class="product-info">
                          <h2 class="product-title">{{ item.title }}</h2>
                        </div>
                        <div class="action-button">
                          <a
                            :href="item.href"
                            :title="`Zum Produkt ${item.title}`"
                            >ZUM PRODUKT</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
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

const base = "/poster_plakate_files";
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

const products = [
  {
    href: "https://www.aventura-print.de/Poster-drucken-lassen-Plakate-drucken-lassen,category,14239.html",
    title: "Preisknaller",
    img: `${base}/W_14239.png`,
  },
  {
    href: "https://www.aventura-print.de/wahlplakate-online-bedrucken,category,28350.html",
    title: "Wahl- / Veranstaltungsplakate",
    img: `${base}/fa8688338b4b1586310c858a1b85fdb2.png`,
  },
  {
    href: "https://www.aventura-print.de/plakate-auenwerbung-online-drucken,category,28359.html",
    title: "Plakate für Außenwerbung",
    img: `${base}/W_28359.png`,
  },
  {
    href: "https://www.aventura-print.de/plakate-anderen-material-online-bedrucken,category,28360.html",
    title: "Plakate aus anderen Materialien",
    img: `${base}/a2cdf54d43154188b2e4c24a8e39f3b4.png`,
  },
];
</script>
