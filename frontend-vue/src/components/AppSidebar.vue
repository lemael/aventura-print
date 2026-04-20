<template>
  <div class="col-md-3 hidden-sm hidden-xs sidebar">
    <!-- widget-search -->
    <aside class="widget-search mb-30">
      <form action="https://www.aventura-print.de/category.htm">
        <input type="text" name="sSuche" placeholder="Hier suchen..." />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </aside>

    <!-- Warengruppen -->
    <WarengruppenMenu />

    <!-- Papiergewichtsrechner -->
    <aside class="widget widget-papiergewichtsrechner mb-30 box-shadow">
      <h5 class="widget-title border-left mb-10">Papiergewichtsrechner</h5>
      <a
        href="https://www.aventura-print.de/papiergewichtsrechner.htm"
        title="Papiergewichtsrechner"
      >
        <img
          :src="papiergewichtsrechnerImg"
          class="img-responsive"
          alt="Papiergewichtsrechner"
          title="Papiergewichtsrechner"
        />
      </a>
    </aside>

    <!-- Zahlen & Versand -->
    <aside class="widget widget-paymentinfo mb-30 box-shadow">
      <h5 class="widget-title border-left mb-10">Zahlen &amp; Versand</h5>
      <img :src="visaImg" class="img-responsive" alt="Visa" title="Visa" />
      <img
        :src="paypalImg"
        class="img-responsive"
        alt="Paypal"
        title="Paypal"
      />
      <img
        :src="mastercardImg"
        class="img-responsive"
        alt="Mastercard"
        title="Mastercard"
      />
      <img :src="dhlImg" class="img-responsive" alt="DHL" title="DHL" />
      <img :src="upsImg" class="img-responsive" alt="UPS" title="UPS" />
      <img :src="dpdImg" class="img-responsive" alt="DPD" title="DPD" />
      <img :src="glsImg" class="img-responsive" alt="GLS" title="GLS" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import WarengruppenMenu from "./WarengruppenMenu.vue";

const props = defineProps<{
  assetBase: string;
}>();

const papiergewichtsrechnerImg = `${props.assetBase}/papiergewichtsrechner.png`;
const visaImg = `${props.assetBase}/visa.png`;
const paypalImg = `${props.assetBase}/paypal.png`;
const mastercardImg = `${props.assetBase}/mastercard.png`;
const dhlImg = `${props.assetBase}/dhl.png`;
const upsImg = `${props.assetBase}/ups.png`;
const dpdImg = `${props.assetBase}/dpd.png`;
const glsImg = `${props.assetBase}/gls.png`;
</script>
