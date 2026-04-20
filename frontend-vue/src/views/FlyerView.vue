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
        <AppSidebar asset-base="/flyer_files" />

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
                <span>9 Kategorie(n)</span>
              </div>
            </div>

            <!-- Tab Content -->
            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Flyer &amp; Folder</h1>
                Sie möchten Ihre Flyer, Handzettel oder Faltblätter hochwertig,
                einfach und schnell drucken? Am Besten: noch heute bestellt -
                und schon morgen geliefert! Sehr gerne! Wir bieten Ihnen eine
                große Auswahl an hochwertigen Papiersorten und Veredelungen.
                Egal ob Wickelfalz, Zickzackfalz oder Fensterfalz, wir
                berücksichtigen jeden Ihrer Wünsche und schrecken auch vor
                Sonderwünschen nicht zurück.
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

const base = "/flyer_files";
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
    href: "https://www.aventura-print.de/ungefalzte-flyer,category,22426.html",
    title: "ungefalzte Flyer",
    img: `${base}/W_22426.png`,
  },
  {
    href: "https://www.aventura-print.de/mittelfalz-faltblatt,category,22427.html",
    title: "Faltblatt mit Mittelfalz",
    img: `${base}/W_22427.png`,
  },
  {
    href: "https://www.aventura-print.de/wickelfalz-faltblatt,category,22428.html",
    title: "Faltblatt mit Wickelfalz",
    img: `${base}/W_22428.png`,
  },
  {
    href: "https://www.aventura-print.de/zickzackfalz-faltblatt,category,22429.html",
    title: "Faltblatt mit Zickzackfalz",
    img: `${base}/W_22429.png`,
  },
  {
    href: "https://www.aventura-print.de/fensterfalz-faltblatt,category,22430.html",
    title: "Faltblatt mit Fensterfalz",
    img: `${base}/W_22430.png`,
  },
  {
    href: "https://www.aventura-print.de/doppelparallelfalz-faltblatt,category,22432.html",
    title: "Faltblatt mit Doppelparallelfalz",
    img: `${base}/W_22432.png`,
  },
  {
    href: "https://www.aventura-print.de/kreuzbruchfalz-faltblatt,category,22433.html",
    title: "Faltblatt mit Kreuzbruchfalz",
    img: `${base}/W_22433.png`,
  },
  {
    href: "https://www.aventura-print.de/flyer-faltblatt-besondere-varianten,category,22434.html",
    title: "Besondere Varianten",
    img: `${base}/W_22434.png`,
  },
  {
    href: "https://www.aventura-print.de/Exklusive-Flyer-Folder-drucken-lassen,category,13574.html",
    title: "Exklusive Flyer & Folder",
    img: `${base}/W_13574.png`,
  },
];
</script>
