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
        <AppSidebar asset-base="/tragetaschen_files" />

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
                <span>1 Kategorie(n)</span>
              </div>
            </div>

            <div class="tab-content">
              <div class="product-description mb-20">
                <h1>Tragetaschen</h1>
                Ein praktisches und zugleich ausgesprochen wirksames Werbemittel
                sind unsere hochwertigen Tragetaschen aus Papier. In unserem
                Onlineshop halten wir diese in zahlreichen Größen sowie
                verschiedenen Varianten für Sie bereit, damit Sie das zu Ihrem
                Unternehmen passende Produkt finden. Ob als Goodiebag auf Messen
                und Veranstaltungen oder als Aufmerksamkeit für Kunden, die die
                erworbene Ware aus Ihrem Geschäft darin nach Hause tragen können
                - mit Papiertragetaschen im Corporate Design setzen Sie auf eine
                beliebte und umweltfreundliche Taschenvariante.
                <br />
                <br />
                Wie wäre es mit unseren Taschen mit PP-Kordeln? Diese bestehen
                aus 170 g/m² dickem Bilderdruckpapier und werden von uns
                folienkaschiert - dadurch macht ihnen auch ein kleiner Schauer
                nichts aus. Diese Taschenvariante verfügt über stabile
                PP-Kordeln, bei denen Sie zwischen vielen wunderschönen Farben
                wählen können. Alternativ dazu empfehlen wir Ihnen unsere
                Taschen mit gedrehten Papierkordeln. Bei diesen Modellen besteht
                die Tasche selbst aus weißem oder braunem Kraftpapier mit einer
                Grammatur von 100 g/m². Wie bei den PP-Kordeln haben Sie auch
                bei den Papierkordeln mehrere Farben zur Auswahl.
              </div>
              <div role="tabpanel" class="tab-pane active" id="grid-view">
                <div class="row">
                  <div class="grid-view-category">
                    <div class="col-sm-4 col-xs-12">
                      <div class="product-item product-item-2">
                        <div class="center-img">
                          <a
                            href="https://www.aventura-print.de/taschen-mit-pp-kordel-drucken-lassen,category,20770.html"
                            title="Taschen mit PP-Kordel"
                          >
                            <img
                              :src="productImg"
                              border="0"
                              class="img-responsive product-img"
                              alt="Taschen mit PP-Kordel"
                              title="Taschen mit PP-Kordel"
                            />
                          </a>
                        </div>
                        <div class="product-info">
                          <h2 class="product-title">Taschen mit PP-Kordel</h2>
                        </div>
                        <div class="action-button">
                          <a
                            href="https://www.aventura-print.de/taschen-mit-pp-kordel-drucken-lassen,category,20770.html"
                            title="Zum Produkt Taschen mit PP-Kordel"
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

const base = "/tragetaschen_files";
const headerImg = `${base}/header-subpages.png`;
const productImg = `${base}/W_20770.png`;

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
