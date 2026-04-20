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
        <AppSidebar asset-base="/broschueren_magazine_files" />

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
                <span>5 Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Broschüren &amp; Magazine</h1>
                Sie haben die Wahl zwischen Broschüren, Magazinen, Zeitschriften
                oder mehrseitigen Image- bzw. Werbeprospekten mit bis zu 400
                Seiten. Wir bieten Ihnen unsere Magazine in den Papierstärken
                90g bis 300g an, teilweise sogar mit einem stärkeren Umschlag.
                Zum Teil erhalten Sie diese auch mit Folienkaschierung. Bei der
                Rückendrahtheftung sorgen zwei feine Metallklemmen für den
                Zusammenhalt der einzelnen Seiten. Bei der Spiralbindung
                übernimmt dies die hochwertige Wire-Spiralbindung, die besonders
                gut für Präsentations- und Schulungsunterlagen sowie Fragebögen
                geeignet ist.
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

const base = "/broschueren_magazine_files";
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
    href: "https://www.aventura-print.de/Broschueren-im-Offsetdruck-drucken-lassen,category,9434.html",
    title: "Broschüren Klammerheftung",
    img: `${base}/W_9434.png`,
  },
  {
    href: "https://www.aventura-print.de/Broschueren-mit-Ringoesenheftung-drucken-lassen,category,13801.html",
    title: "Broschüren (Ringösen)",
    img: `${base}/W_13801.png`,
  },
  {
    href: "https://www.aventura-print.de/Broschuere-Klebebindung-drucken-lassen,category,10103.html",
    title: "Broschüre (Klebebindung)",
    img: `${base}/W_10103.png`,
  },
  {
    href: "https://www.aventura-print.de/Broschuere-Spiralbindung-drucken-lassen,category,9421.html",
    title: "Broschüren (Spiralbindung)",
    img: `${base}/W_9421.png`,
  },
  {
    href: "https://www.aventura-print.de/banderolen-aus-papier-online-bestellen,category,21009.html",
    title: "Banderolen aus Papier",
    img: `${base}/W_21009.png`,
  },
];
</script>
