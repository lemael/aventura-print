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
        <AppSidebar asset-base="/stempel_files" />

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
                <span>3 Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Blöcke</h1>
                Blöcke sind unentbehrlich: egal ob für den Eigenbedarf oder als
                Kundengeschenk. Bei uns erhalten Sie Blöcke in allen gängigen
                Formaten, wahlweise mit Leimbindung oder Spiralbindung. Alles
                günstig und schnell - direkt vom Hersteller. Bedruckt mit Ihrer
                persönlichen Werbung. Bleiben Sie so bei Ihren Kunden und
                Partnern stets in Erinnerung.
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
                            <img :src="item.img" border="0" />
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

const base = "/stempel_files";
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
    href: "https://www.aventura-print.de/Bloecke-ohne-Deckblatt-drucken-lassen,category,19373.html",
    title: "Blöcke (ohne Deckblatt)",
    img: `${base}/W_19373.png`,
  },
  {
    href: "https://www.aventura-print.de/Bloecke-mit-Deckblatt-drucken-lassen,category,19363.html",
    title: "Blöcke (mit Deckblatt)",
    img: `${base}/W_19363.png`,
  },
  {
    href: "https://www.aventura-print.de/bloecke-fuer-quittung-online-bedrucken,category,23967.html",
    title: "Blöcke für Quittung",
    img: `${base}/W_23967.png`,
  },
];
</script>
