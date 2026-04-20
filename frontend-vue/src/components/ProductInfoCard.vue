<template>
  <div class="product-item product-item-2">
    <div class="center-img">
      <a :href="href" :title="title">
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
      <a :href="href" :title="actionTitle">{{ actionText }}</a>
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

const resolvedImageSrc = props.imageSrc ?? "/index_files/Unbenannt.html";
</script>
