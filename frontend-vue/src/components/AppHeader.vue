<template>
  <header class="header-area header-wrapper">
    <div class="header-top-bar">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="top-link clearfix">
              <ul class="link f-right user">
                <li class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      class="top-link-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2c-4.1 0-7.5 2.2-7.5 5v1h15v-1c0-2.8-3.4-5-7.5-5z"
                      />
                    </svg>
                    Registrieren
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="user-settings">
                    <li>
                      <b>Sie haben noch kein Konto?</b>
                      <a
                        href="https://www.aventura-print.de/adresse.htm?loginonly=2"
                        class="submit-btn-2 mt-20 btn-hover-2"
                        title="Registrieren"
                      >
                        <span>Registrieren</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="btn dropdown-toggle user-login"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      class="top-link-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M17 10h-1V7.5a3.5 3.5 0 0 0-6.9-.9h2.1a1.5 1.5 0 0 1 2.8.9V10H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm0 9H7v-7h10v7z"
                      />
                    </svg>
                    Login
                  </a>
                  <div class="dropdown-menu">
                    <form method="post" action="/login" name="formLogin">
                      <div class="head_log_men">
                        <label for="kundennrHeader"
                          >E-Mail-Adresse oder Kunden-Nr.</label
                        >
                        <input
                          type="text"
                          id="kundennrHeader"
                          class="form-control"
                          placeholder="E-Mail-Adresse oder Kunden-Nr."
                          name="kundennr"
                        />
                      </div>
                      <div class="head_log_men mt-15">
                        <label for="kundenpasswortHeader">Passwort</label>
                        <input
                          type="password"
                          id="kundenpasswortHeader"
                          class="form-control"
                          placeholder="Passwort"
                          name="kundenpasswort"
                        />
                      </div>
                      <div>
                        <input
                          class="submit-btn-1 mt-20 btn-hover-1"
                          type="submit"
                          name="kundenholensubmit"
                          value="Login"
                        />
                      </div>
                      <div>
                        <a
                          href="https://www.aventura-print.de/pw_lost.htm"
                          class="submit-btn-2 mt-20 btn-hover-2"
                          title="Passwort vergessen"
                        >
                          <span>Passwort vergessen?</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-header" class="header-middle-area">
      <div class="container">
        <div class="full-width-mega-dropdown">
          <div class="row">
            <!-- logo -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="logo">
                <router-link to="/">
                  <img
                    src="/assets/images/jopke.svg"
                    title=""
                    alt=""
                    class="loading img-responsive"
                  />
                </router-link>
              </div>
            </div>
            <!-- primary-menu -->
            <div class="col-md-7 col-sx-12">
              <div class="navbar-header visible-sm visible-xs">
                <button
                  class="navbar-toggler navbar-toggler-right pull-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#primary-menu"
                  aria-controls="primary-menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="menu-global menu-top"></span>
                  <span class="menu-global menu-middle"></span>
                  <span class="menu-global menu-bottom"></span>
                </button>
              </div>
              <nav id="primary-menu" class="navbar-collapse collapse">
                <ul id="productNav" class="main-menu text-center">
                  <li>
                    <router-link to="/"><span>Home</span></router-link>
                  </li>
                  <li class="mega-parent">
                    <button
                      class="product-nav disabled"
                      data-toggle="collapse"
                      oncontextmenu="return false;"
                      data-target="#mega-menu-area"
                    >
                      Produkte
                      <i
                        class="fa fa-angle-right pull-right hidden-md hidden-lg"
                      ></i>
                    </button>
                    <div
                      class="mega-menu-area clearfix collapse h-600"
                      id="mega-menu-area"
                    >
                      <div class="nav-wrapper h-600">
                        <ul>
                          <li v-for="item in productMenu" :key="item.label">
                            <span v-if="item.letter" class="abc">{{
                              item.letter
                            }}</span>
                            <router-link
                              v-if="item.to"
                              :to="item.to"
                              class="elements"
                            >
                              {{ item.label }}
                            </router-link>
                            <a v-else :href="item.href" class="elements">
                              {{ item.label }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <router-link to="/kontakt">Kontakt</router-link>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- header-search -->
            <div class="col-md-2 col-sm-6 search-wrapper">
              <div class="search-top-cart f-right">
                <div class="header-search f-left">
                  <div class="header-search-inner">
                    <button class="search-toggle">
                      <svg
                        class="search-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm8.7 11.3 2.9 2.9-1.4 1.4-2.9-2.9 1.4-1.4z"
                        />
                      </svg>
                    </button>
                    <form action="https://www.aventura-print.de/category.htm">
                      <div class="top-search-box">
                        <input
                          type="text"
                          name="sSuche"
                          class="searchInput"
                          placeholder="Gesuchtes Produkt hier eingeben..."
                        />
                        <button type="submit" class="enableOnInput">
                          <svg
                            class="search-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm8.7 11.3 2.9 2.9-1.4 1.4-2.9-2.9 1.4-1.4z"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface ProductMenuItem {
  label: string;
  letter?: string;
  to?: string;
  href?: string;
}

const productMenu: ProductMenuItem[] = [
  {
    label: "Abiturzeitung",
    letter: "A",
    href: "https://www.aventura-print.de/abiturzeitung-bestellen,category,13391.html",
  },
  {
    label: "Aktenordner",
    href: "https://www.aventura-print.de/aktenordner-mit-2-loch-hebelmechanik-und-schlitz-drucken-lassen,category,14084.html",
  },
  {
    label: "Ansteckbuttons",
    href: "https://www.aventura-print.de/ansteckbuttons-drucken-lassen,category,18902.html",
  },
  {
    label: "Architekten-Zeichnungen",
    href: "https://www.aventura-print.de/architektenzeichnungen-drucken-lassen,category,15139.html",
  },
  {
    label: "Aufkleber & Ettiketten",
    href: "https://www.aventura-print.de/aufkleber-ettiketten-drucken-lassen,category,9838.html",
  },

  {
    label: "Beachflag",
    letter: "B",
    href: "https://www.aventura-print.de/beachflag-bedrucken-lassen,category,17339.html",
  },
  {
    label: "Bedruckte Gläser",
    href: "https://www.aventura-print.de/bedruckte-glaeser,category,19513.html",
  },
  {
    label: "Bedruckte Tassen",
    href: "https://www.aventura-print.de/bedruckte-tassen-foto,category,16668.html",
  },
  {
    label: "Behelfsmaske",
    href: "https://www.aventura-print.de/behelfsmaske-online-drucken-lassen,category,22877.html",
  },
  {
    label: "Besonders umweltfreundliche Druckprodukte",
    href: "https://www.aventura-print.de/umweltfreundliche-druckprodukte,category,28246.html",
  },
  {
    label: "Bierdeckel",
    href: "https://www.aventura-print.de/bierdeckel-bedrucken-lassen,category,10108.html",
  },
  { label: "Blöcke", to: "/stempel" },
  {
    label: "Branchen",
    href: "https://www.aventura-print.de/branchen,category,28235.html",
  },
  {
    label: "Briefbogen",
    href: "https://www.aventura-print.de/briefbogen-drucken-lassen,category,9466.html",
  },
  { label: "Broschüren & Magazine", to: "/broschueren-magazine" },
  {
    label: "Bücher",
    href: "https://www.aventura-print.de/buecher-drucken-lassen,category,12529.html",
  },
  {
    label: "Calanda Broncos Fanartikel",
    letter: "C",
    href: "https://www.aventura-print.de/calanda-broncos-fanartikel-online-bestellen,category,27062.html",
  },

  {
    label: "Diplomarbeiten",
    letter: "D",
    href: "https://www.aventura-print.de/diplomarbeiten-drucken-lassen,category,13847.html",
  },
  {
    label: "Duftlack Veredelung",
    href: "https://www.aventura-print.de/exklusive-duft-lack-produkte-drucken-lassen,category,13777.html",
  },

  {
    label: "Ehrungen",
    letter: "E",
    href: "https://www.aventura-print.de/ehrungen-drucken-lassen,category,20291.html",
  },
  {
    label: "Einlassbänder",
    href: "https://www.aventura-print.de/einlassbaender-online-drucken,category,20554.html",
  },
  {
    label: "Einschlagpapier",
    href: "https://www.aventura-print.de/einschlagpapier-online-bedrucken,category,27482.html",
  },
  {
    label: "Eintrittskarten",
    href: "https://www.aventura-print.de/eintrittskarten,category,9486.html",
  },
  {
    label: "Etiketten & Sticker",
    href: "https://www.aventura-print.de/etiketten-online-bedrucken,category,24047.html",
  },

  {
    label: "Faltplaner",
    letter: "F",
    href: "https://www.aventura-print.de/faltplaner-online-drucken-lassen,category,19976.html",
  },
  {
    label: "Fanklatschen",
    href: "https://www.aventura-print.de/fanklatsche-bedrucken-lassen,category,19896.html",
  },
  {
    label: "Feuchtpflegetücher",
    href: "https://www.aventura-print.de/pflegetuecher-online-drucken-lassen,category,20547.html",
  },
  {
    label: "Fine Art Printing",
    href: "https://www.aventura-print.de/fine-art-printing-online-bedrucken,category,28252.html",
  },
  {
    label: "Firmenstempel",
    href: "https://www.aventura-print.de/firmenstempel-drucken-lassen,category,13567.html",
  },
  {
    label: "Flaschenhänger",
    href: "https://www.aventura-print.de/flaschenhaenger-drucken-lassen,category,20928.html",
  },
  { label: "Flyer & Folder", to: "/flyer" },
  {
    label: "Foliendruck",
    href: "https://www.aventura-print.de/folie-drucken-lassen,category,19152.html",
  },
  {
    label: "Foto-Geschenke",
    href: "https://www.aventura-print.de/foto-geschenke-drucken-lassen,category,19359.html",
  },
  {
    label: "Fototapeten",
    href: "https://www.aventura-print.de/fototapeten-drucken-lassen,category,15140.html",
  },
  {
    label: "Fruchtgummi",
    href: "https://www.aventura-print.de/weingummi-online-drucken,category,18708.html",
  },
  {
    label: "Getränke Flaschen",
    href: "https://www.aventura-print.de/getraenke-flaschen-extrem-guenstig-bestellen,category,21915.html",
  },

  {
    label: "Getränke-Karten",
    letter: "G",
    href: "https://www.aventura-print.de/getraenke-karten-online-bestellen,category,9448.html",
  },
  {
    label: "Gruß- & Einladungskarten",
    href: "https://www.aventura-print.de/grusskarten-einladungskarten,category,9485.html",
  },
  {
    label: "Grüner Hintergrund Roll-Ups & Faltdisplays",
    href: "https://www.aventura-print.de/gruener-hintergrund-roll-ups-faltdisplays-online-bedrucken,category,27212.html",
  },

  {
    label: "Haftquader / Haftnotizen",
    letter: "H",
    href: "https://www.aventura-print.de/haftquader-haftnotizen-online-drucken,category,18736.html",
  },
  {
    label: "Handyschutzhülle",
    href: "https://www.aventura-print.de/handyschutzhuelle-online-drucken,category,18678.html",
  },
  {
    label: "Hissflaggen",
    href: "https://www.aventura-print.de/hissflagen-schnell-und-preiswert,category,15252.html",
  },
  {
    label: "Hochzeitskarten",
    href: "https://www.aventura-print.de/hochzeitskarten-drucken-lassen,category,13928.html",
  },
  {
    label: "Hochzeitszeitungen",
    href: "https://www.aventura-print.de/hochzeitszeitungen-bestellen,category,13416.html",
  },
  {
    label: "Hüllen für Karten",
    href: "https://www.aventura-print.de/huellen-fuer-karten-online-bestellen,category,22048.html",
  },
  { label: "Hardcover-Bücher", to: "/hardcover" },

  {
    label: "Kalender",
    letter: "K",
    href: "https://www.aventura-print.de/kalender,category,9487.html",
  },
  {
    label: "Karten zu Ostern",
    href: "https://www.aventura-print.de/karten-zu-ostern-drucken-lassen,category,14764.html",
  },
  {
    label: "Karten zum Geburtstag",
    href: "https://www.aventura-print.de/karten-zum-geburtstag-drucken-lassen,category,14675.html",
  },
  {
    label: "Klemmbrett",
    href: "https://www.aventura-print.de/klemmbrett-online-bedrucken,category,17925.html",
  },
  {
    label: "Kopierpapier A4",
    href: "https://www.aventura-print.de/kopierpapier-guenstig-a4,category,16310.html",
  },
  {
    label: "Kuvertierhüllen",
    href: "https://www.aventura-print.de/briefumschlaege-drucken-lassen,category,9470.html",
  },
  {
    label: "Leuchtkastenfolie",
    letter: "L",
    href: "https://www.aventura-print.de/leuchtkastenfolie-drucken-lassen,category,9769.html",
  },
  {
    label: "Loseblattsammlung",
    href: "https://www.aventura-print.de/loseblattsammlung-online-drucken,category,17408.html",
  },
  {
    label: "Luftballon",
    href: "https://www.aventura-print.de/luftballon-bedrucken,category,19405.html",
  },

  {
    label: "Magnetschilder",
    letter: "M",
    href: "https://www.aventura-print.de/magnetschilder-drucken-lassen,category,13780.html",
  },
  {
    label: "Mailing für Postkarten",
    href: "https://www.aventura-print.de/mailing-fuer-postkarten-drucken-lassen,category,18365.html",
  },
  {
    label: "Mailings",
    href: "https://www.aventura-print.de/mailings,category,10697.html",
  },
  {
    label: "Messe",
    href: "https://www.aventura-print.de/messe,category,28243.html",
  },
  {
    label: "Meterstäbe",
    href: "https://www.aventura-print.de/meterstaebe-online-drucken-lassen,category,18675.html",
  },
  {
    label: "Mousepads inkl. Druck",
    href: "https://www.aventura-print.de/foto-mousepad-online-druckerei,category,17659.html",
  },
  {
    label: "Mundtücher",
    href: "https://www.aventura-print.de/mundtuecher-online-bedrucken,category,24423.html",
  },

  {
    label: "Notizbuch",
    letter: "N",
    href: "https://www.aventura-print.de/notizbuch-online-bedrucken-lassen,category,18367.html",
  },

  {
    label: "Paketklebebänder",
    letter: "P",
    href: "https://www.aventura-print.de/paketklebebaender-online-bestellen,category,24198.html",
  },
  {
    label: "Pappbecher & Zubehör",
    href: "https://www.aventura-print.de/pappbecher-und-zubehoer-bestellen,category,21116.html",
  },
  {
    label: "Plastikkarten",
    href: "https://www.aventura-print.de/plastikkarten,category,12255.html",
  },
  {
    label: "Platzdeckchen",
    href: "https://www.aventura-print.de/platzdeckchen-mit-foto-online-gestalten,category,16755.html",
  },
  {
    label: "Polo-Shirts",
    href: "https://www.aventura-print.de/polo-shirts-online-bestellen,category,19181.html",
  },
  { label: "Poster & Plakate", to: "/poster-plakate" },
  {
    label: "Postkarten",
    href: "https://www.aventura-print.de/postkarten,category,9484.html",
  },
  {
    label: "Pressemappen",
    href: "https://www.aventura-print.de/pressemappen-drucken-lassen,category,14041.html",
  },
  {
    label: "Printklassiker",
    href: "https://www.aventura-print.de/printklassiker-online-bedrucken,category,28643.html",
  },
  {
    label: "Private-Label-Drinks",
    href: "https://www.aventura-print.de/private-label-drinks-online-bestellen,category,15820.html",
  },
  {
    label: "Prägezangen",
    href: "https://www.aventura-print.de/praegezange-online-bestellen,category,24184.html",
  },
  {
    label: "Präsentationsmappen",
    href: "https://www.aventura-print.de/praesentationsmappen-bedrucken,category,9418.html",
  },

  {
    label: "Rabattcoupons",
    letter: "R",
    href: "https://www.aventura-print.de/rabattcoupons-online-bestellen,category,22076.html",
  },
  {
    label: "Ringbücher & Ordner",
    href: "https://www.aventura-print.de/ringbuecher-ordner,category,13308.html",
  },
  {
    label: "Rollen-Etiketten",
    href: "https://www.aventura-print.de/rollen-etiketten-online-druckerei,category,17017.html",
  },
  {
    label: "Rubbelkarten",
    href: "https://www.aventura-print.de/rubbelkarten-drucken-lassen,category,14223.html",
  },

  {
    label: "Schlüsselbänder bedruckt",
    letter: "S",
    href: "https://www.aventura-print.de/schluesselbander-online-bestellen,category,19153.html",
  },
  {
    label: "Schreibtischunterlagen",
    href: "https://www.aventura-print.de/schreibtischunterlagen,category,9518.html",
  },
  {
    label: "Schülerzeitung",
    href: "https://www.aventura-print.de/schuelerzeitung-bestellen,category,13395.html",
  },
  {
    label: "Selbstdurchschreibesätze",
    href: "https://www.aventura-print.de/selbstdurchschreibesaetze-drucken,category,9478.html",
  },
  {
    label: "Snowflag",
    href: "https://www.aventura-print.de/snowflags-bedrucken-lassen,category,19768.html",
  },
  {
    label: "Sommerartikel",
    href: "https://www.aventura-print.de/sommerartikel,category,28241.html",
  },
  {
    label: "Speise-Karten",
    href: "https://www.aventura-print.de/speise-karten-online-bestellen,category,18909.html",
  },
  {
    label: "Sticker-bögen",
    href: "https://www.aventura-print.de/sticker-boegen-online-drucken-lassen,category,19860.html",
  },
  {
    label: "Süßwaren",
    href: "https://www.aventura-print.de/suesse-werbung-bestellen,category,19372.html",
  },

  { label: "T-Shirts", letter: "T", to: "/t-shirts" },
  {
    label: "Tablettauflagen",
    href: "https://www.aventura-print.de/tablettauflagen-online-bedrucken,category,28149.html",
  },
  {
    label: "Tageszeitungen",
    href: "https://www.aventura-print.de/zeitungen-online-bestellen,category,23508.html",
  },
  {
    label: "Tapetenvlies",
    href: "https://www.aventura-print.de/tapetenvlies-rollen-einfach-online-bestellen,category,18920.html",
  },
  {
    label: "Taschen und Beutel",
    href: "https://www.aventura-print.de/taschen-und-beutel-drucken-lassen,category,20443.html",
  },
  {
    label: "Taufkarten",
    href: "https://www.aventura-print.de/taufkarten-drucken-lassen,category,13959.html",
  },
  {
    label: "Textilien und Bekleidung",
    href: "https://www.aventura-print.de/bedruckte-und-bestickte-textilien-und-bekleidung,category,19155.html",
  },
  {
    label: "Textilspannrahmen",
    href: "https://www.aventura-print.de/textilspannrahmen-drucken-lassen,category,19903.html",
  },
  {
    label: "Theken- & Tischaufsteller",
    href: "https://www.aventura-print.de/thekenaufsteller-tischaufsteller,category,9465.html",
  },
  {
    label: "Trauerkarten",
    href: "https://www.aventura-print.de/trauerkarten-drucken-lassen,category,14010.html",
  },
  {
    label: "Treuekarten",
    href: "https://www.aventura-print.de/treuekarten-stempelkarten-drucken-lassen,category,18637.html",
  },
  { label: "Tragetaschen", to: "/tragetaschen" },
  {
    label: "Türhänger",
    href: "https://www.aventura-print.de/tuerhaenger-drucken-lassen,category,13557.html",
  },

  {
    label: "Unterlagen für Briefwahl",
    letter: "U",
    href: "https://www.aventura-print.de/unterlagen-briefwahl-online-bedrucken,category,27589.html",
  },
  {
    label: "Urkunden",
    href: "https://www.aventura-print.de/urkunden-online-bestellen,category,23634.html",
  },

  {
    label: "Veranstaltungsplakate",
    letter: "V",
    href: "https://www.aventura-print.de/veranstaltungsplakate-drucken-lassen,category,18578.html",
  },
  {
    label: "Verpackungen",
    href: "https://www.aventura-print.de/verpackungen,category,18091.html",
  },
  { label: "Visitenkarten", to: "/visitenkarten" },

  {
    label: "Wahlplakate",
    letter: "W",
    href: "https://www.aventura-print.de/wahlplakate,category,17958.html",
  },
  {
    label: "Wahlzettel",
    href: "https://www.aventura-print.de/wahlzettel-online-bedrucken,category,24901.html",
  },
  {
    label: "Weihnachtskarten",
    href: "https://www.aventura-print.de/weihnachtskarten-drucken-lassen,category,13775.html",
  },
  {
    label: "Werbemittel",
    href: "https://www.aventura-print.de/werbemittel-bestellen,category,18219.html",
  },
  {
    label: "Werbeplanen",
    href: "https://www.aventura-print.de/werbeplane-drucken-sparen-sie-bis-zu-80-beim-druck,category,13424.html",
  },

  {
    label: "Zipperdisplays",
    letter: "Z",
    href: "https://www.aventura-print.de/zipperdisplays-online-bedrucken,category,28882.html",
  },
];
</script>

<style scoped>
.top-link-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
  margin-right: 4px;
  vertical-align: -2px;
}

.search-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
  vertical-align: middle;
}
</style>
