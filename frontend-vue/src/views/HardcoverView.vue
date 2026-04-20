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
        <!-- Sidebar -->
        <AppSidebar asset-base="/hardcover_files" />

        <!-- Hauptinhalt -->
        <div class="col-md-9 col-xs-12">
          <div class="category-content">
            <!-- shop-option -->
            <div class="category-panel box-shadow mb-30 clearfix">
              <ul class="shop-tab f-left" role="tablist">
                <li class="active f-left mr-20">
                  <a href="#grid-view" data-toggle="tab">
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <div class="showing f-right text-right">
                <span>2 Kategorie(n)</span>
              </div>
            </div>

            <!-- Tab Content -->
            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Hardcover-Bücher ab 48 Seiten</h1>
                Sie möchten Ihr Buch veröffentlichen und suchen nach einer
                zuverlässigen Druckerei für hochwertigen Buchdruck? Wir drucken
                Ihre Bücher auf modernsten Druckmaschinen zu ungewöhnlich
                günstigen Preisen, auch kleine Auflagen sind möglich. Unsere
                Bücher Hardcover haben einen stabilen Einband. Bei der Wahl
                Ihrer Buchausstattung stehen Ihnen verschiedene Papiere sowie
                Schwarz/Weiß- oder Farbdruck zur Verfügung. Die PUR-Klebebindung
                sorgt für besten Halt der Seiten -
                <span style="font-weight: bold"
                  >Bücher, die sich gut lesen!</span
                >
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

const base = "/hardcover_files";
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
    href: "https://www.aventura-print.de/schwarz-weiss-Inhalt-,category,15517.html",
    title: "schwarz-weiß (Inhalt)",
    img: `${base}/W_15517.png`,
  },
  {
    href: "https://www.aventura-print.de/farbig-bedruckt-Inhalt-,category,15518.html",
    title: "farbig bedruckt (Inhalt)",
    img: `${base}/W_15518.png`,
  },
];
</script>
