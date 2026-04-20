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
        <AppSidebar asset-base="/category_files" />

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
                <span>{{ products.length }} Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Visitenkarten</h1>
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

const base = "/category_files";
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
    href: "https://www.aventura-print.de/visitenkarten-auf-natur-und-recyclingpapier-online-bedrucken,category,27127.html",
    title: "Visitenkarten auf Natur- und Recyclingpapier",
    img: `${base}/69cc7719d2e964755ef3580cd06dc66c.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-auf-hocherwertigem-material-online-bedrucken,category,27125.html",
    title: "Visitenkarten auf hochwertigem Material",
    img: `${base}/3b3bc53074ca8422d1a1ec62cab36e15.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-mit-hocherwertiger-veredelung-online-bedrucken,category,27126.html",
    title: "Visitenkarten mit hochwertiger Veredelung",
    img: `${base}/165dc89341dc279b8c001f0f60783cd2.png`,
  },
  {
    href: "https://www.aventura-print.de/klassische-visitenkarten-gefalzt-online-bedrucken,category,28492.html",
    title: "Klassische Visitenkarten gefalzt",
    img: `${base}/60466a5cb9fb8c184cd1c0bb196d4022.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-leinenpapier-online-bedrucken,category,28495.html",
    title: "Visitenkarten gefalzt auf Leinenpapier",
    img: `${base}/7bbfa2b4ce7a93102b0cf6a6f231d441.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-recyclingpapier-online-bedrucken,category,28493.html",
    title: "Visitenkarten gefalzt Recyclingpapier",
    img: `${base}/e669634f4bd1c28ec54bfeed764fe7fa.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-standard-online-bedrucken,category,28488.html",
    title: "Visitenkarten gefalzt Standard",
    img: `${base}/6f3746fe19e5ef2bad49a1dcccafa8c7.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-recycling-naturpapier-online-bedrucken,category,28489.html",
    title: "Visitenkarten gefalzt auf Recycling- und Naturpapier",
    img: `${base}/f243ab90352b5b638965d3a211441988.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-uvlack-partiell-online-bedrucken,category,28499.html",
    title: "Visitenkarten gefalzt mit UV-Lack partiell",
    img: `${base}/61dd1ae3d2ed76d873e47042c58b0373.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-naturpapier-online-bedrucken,category,28494.html",
    title: "Visitenkarten gefalzt Naturpapier",
    img: `${base}/c6f3370a29594919aa4dc7b168bb1e13.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-online-bedrucken,category,28487.html",
    title: "Visitenkarten gefalzt",
    img: `${base}/bc053ba9c04ff276b7425c5298156ac9.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-hochwertige-papiere-online-bedrucken,category,28490.html",
    title: "Visitenkarten gefalzt auf hochwertigen Papieren",
    img: `${base}/553870db1b4916296e32376f08cc433c.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-silbernes-papier-online-bedrucken,category,28497.html",
    title: "Visitenkarten gefalzt auf silbernem Papier",
    img: `${base}/7ac46cf436ec47923b1101c915fcd837.png`,
  },
  {
    href: "https://www.aventura-print.de/visitenkarten-gefalzt-uvlack-vollflaechig-online-bedrucken,category,28500.html",
    title: "Visitenkarten gefalzt mit UV-Lack vollflächig",
    img: `${base}/7e682265a7f491a108fc1727db8d6572.png`,
  },
];
</script>
