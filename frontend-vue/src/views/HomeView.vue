<template>
  <!-- CSS für die Startseite -->
  <link rel="stylesheet" :href="`${baseUrl}index_files/raleway.css`" />
  <link rel="stylesheet" :href="`${baseUrl}index_files/vendor.css`" />
  <link rel="stylesheet" :href="`${baseUrl}index_files/styles.css`" />

  <!-- Slider -->
  <HomeSlider />
  <!-- Teaser -->
  <HomeTeaser />

  <!-- Bestseller -->
  <div class="container">
    <section id="page-content" class="page-wrapper">
      <div class="mb-80 mb-xs-0">
        <div class="product-tab-section pt-80 pb-55 pb-xs-0">
          <div class="section-title text-left mb-30 mb-sm-15">
            <h2>Bestseller</h2>
            <p>Entdecken Sie die Vielfalt Ihrer Onlinedruckerei</p>
          </div>
          <div class="product-tab">
            <div class="row row-eq-height pb-30 mb-sm-0 pb-xs-0">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Flyer"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/flyer"
                  action-text="ZUM PRODUKT"
                  action-title=""
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Hardcover Bücher"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/hardcover"
                  action-text="ZUM PRODUKT"
                  action-title=""
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Stempel"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/stempel"
                  action-text="ZUM PRODUKT"
                  action-title="Stempel"
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Plakate &amp; Poster"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/poster-plakate"
                  action-text="ZUM PRODUKT"
                  action-title="Plakate &amp; Poster"
                />
              </div>
            </div>
            <div class="row pb-30 row-eq-height">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="T-Shirts"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/t-shirts"
                  action-text="ZUM PRODUKT"
                  action-title=""
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Tragetaschen"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/tragetaschen"
                  action-text="ZUM PRODUKT"
                  action-title=""
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Visitenkarten"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/visitenkarten"
                  action-text="ZUM PRODUKT"
                  action-title="Visitenkarten"
                />
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <ProductInfoCard
                  title="Broschüren &amp; Kataloge"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                  href="/broschueren-magazine"
                  action-text="ZUM PRODUKT"
                  action-title="Broschüren &amp; Kataloge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Aktionen -->
  <HomeAktionen />

  <!-- Neue Produkte -->
  <HomeNeueProdukte />
</template>

<script setup lang="ts">
import HomeAktionen from "../components/HomeAktionen.vue";
import HomeNeueProdukte from "../components/HomeNeueProdukte.vue";
import HomeSlider from "../components/HomeSlider.vue";
import HomeTeaser from "../components/HomeTeaser.vue";
import ProductInfoCard from "../components/ProductInfoCard.vue";

const baseUrl = import.meta.env.BASE_URL;
</script>
