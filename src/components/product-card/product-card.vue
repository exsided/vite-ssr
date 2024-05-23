<template>
  <div class="product-card">
    <div class="product-card__thumbnail">
      <img :src="thumbnail" alt="Товарное изображение" class="product-card__image" />
      <div v-if="canShowImagesSlider" class="product-card__slider">
        <div v-for="(image, imageIndex) in images" :key="imageIndex" class="product-card__slide">
          <img :src="image" alt="Товарное изображение" class="product-card__slide-img" />
          <div class="product-card__slide-dot" />
        </div>
      </div>
    </div>
    <div class="product-card__product-info">
      <h2 class="product-card__title">{{ title }}</h2>
      <p class="product-card__description">{{ description }}</p>
      <div class="product-card__price-discount">
        <span class="product-card__price">
          Цена: <strong>{{ price }} ₽</strong>
        </span>
        <span v-if="discountPercentage" class="product-card__discount">
          Скидка: <strong>{{ discountPercentage }}%</strong>
        </span>
      </div>
      <p class="product-card__brand">
        Бренд: <strong>{{ brand }}</strong>
      </p>
      <p class="product-card__category">
        Категория: <strong>{{ category }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  price: number
  discountPercentage: number
  brand: string
  category: string
  thumbnail: string
  images?: string[]
}

const props = defineProps<Props>()

const canShowImagesSlider = computed(() => props.images?.length > 1)
</script>

<style lang="scss" src="./styles.scss" />
