<template>
  <div class="product-item product-item-2">
    <div class="center-img">
      <a :href="resolvedHref" :title="title">
        <slot name="image">
          <img
            class="img-responsive product-img"
            :src="resolvedImageSrc"
            :alt="title"
            :title="title"
          />
        </slot>
      </a>
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="action-button">
      <a :href="resolvedHref" :title="actionTitle">{{ actionText }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
  href: string;
  imageSrc?: string;
  actionText?: string;
  actionTitle?: string;
}>();

const baseUrl = import.meta.env.BASE_URL;

const resolvedHref =
  props.href.startsWith("/") && !props.href.startsWith("//")
    ? `${baseUrl}#${props.href}`
    : props.href;

const rawImageSrc = props.imageSrc ?? "/index_files/Unbenannt.html";
const resolvedImageSrc =
  rawImageSrc.startsWith("/") && !rawImageSrc.startsWith("//")
    ? `${baseUrl}${rawImageSrc.slice(1)}`
    : rawImageSrc;
</script>
