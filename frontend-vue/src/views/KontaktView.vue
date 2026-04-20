<template>
  <link rel="stylesheet" :href="`${baseUrl}kontakt_files/raleway.css`" />
  <link rel="stylesheet" :href="`${baseUrl}kontakt_files/vendor.css`" />
  <link rel="stylesheet" :href="`${baseUrl}kontakt_files/styles.css`" />
  <link rel="stylesheet" :href="`${baseUrl}kontakt_files/style.css`" />

  <div class="slider">
    <div class="image-container">
      <img
        :src="`${baseUrl}kontakt_files/header-subpages.png`"
        class="img-responsive"
        title="Header"
        alt="Header"
      />
    </div>
  </div>

  <div class="contact">
    <div class="container">
      <div class="address-section mt-80">
        <div class="row row-eq-height">
          <div class="col-sm-4 col-xs-12">
            <div class="contact-address box-shadow">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <h6>Jopke Dialog Services</h6>
              <h6>Am Mondschein 23a, 59557 Lippstadt</h6>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="contact-address box-shadow">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <h6>+49 2941 2868 980</h6>
              <h6>+49 2941 2868 989</h6>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="contact-address box-shadow">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <h6>info@jopke.de</h6>
              <h6>www.jopke.de</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="google-map-section">
      <div class="container-fluid">
        <div id="google-map" class="plr-185"></div>
      </div>
    </div>

    <div class="message-box-section mt--50 mb-80">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="message-box box-shadow white-bg">
              <form id="contact-form" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="border-left mb-30">Kontakt</h4>
                  </div>

                  <div class="col-md-6">
                    <label for="firma">Firma</label>
                    <input
                      type="text"
                      maxlength="100"
                      id="firma"
                      name="firma"
                      placeholder="Firma"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="homepage">Homepage</label>
                    <input
                      type="text"
                      id="homepage"
                      name="homepage"
                      placeholder="Homepage"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="vorname">Name</label>
                    <input
                      type="text"
                      maxlength="50"
                      id="vorname"
                      name="vorname"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="nachname">Nachname</label>
                    <input
                      type="text"
                      id="nachname"
                      name="nachname"
                      placeholder="Nachname"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="strasse">Strasse</label>
                    <input
                      type="text"
                      maxlength="100"
                      id="strasse"
                      name="strasse"
                      placeholder="Strasse"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="plz">PLZ</label>
                    <input
                      type="text"
                      minlength="3"
                      maxlength="12"
                      id="plz"
                      name="plz"
                      placeholder="PLZ"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="ort">Ort</label>
                    <input
                      type="text"
                      maxlength="80"
                      id="ort"
                      name="ort"
                      placeholder="Ort"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="land">Land</label>
                    <input
                      type="text"
                      id="land"
                      name="land"
                      placeholder="Land"
                      value="Deutschland"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="telefon">Telefon</label>
                    <input
                      type="text"
                      minlength="3"
                      maxlength="30"
                      id="telefon"
                      name="telefon"
                      placeholder="Telefon"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email">E-Mail</label>
                    <input
                      type="text"
                      minlength="5"
                      maxlength="254"
                      id="email"
                      name="email"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="telefax">Telefax</label>
                    <input
                      type="text"
                      minlength="3"
                      maxlength="30"
                      id="telefax"
                      name="telefax"
                      placeholder="Telefax"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="handy">Mobil</label>
                    <input
                      type="text"
                      maxlength="30"
                      id="handy"
                      name="handy"
                      placeholder="Mobil"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="mitteilung">Message</label>
                    <textarea
                      id="mitteilung"
                      class="custom-textarea"
                      name="mitteilung"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-md-12 clearfix">
                    <input
                      type="checkbox"
                      name="policy_information_accepted"
                      class="policy-information"
                    />
                    <span class="policy-information-text">
                      Sie erklaeren sich damit einverstanden, dass die
                      personenbezogenen Daten aus der Kontaktanfrage zur
                      Bearbeitung Ihrer Anfrage genutzt werden.
                    </span>
                  </div>
                  <div class="col-md-12">
                    <button
                      class="submit-btn-1 mt-30 btn-hover-1"
                      type="submit"
                      name="submit"
                    >
                      Absenden
                    </button>
                  </div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL;
</script>
