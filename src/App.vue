<template>
  <div class="products">
    <div class="products__header">
      <p>
        При проверке используйте, пожалуйста, следующие слова для ввода в поле
        поиска:
        <br />
        <b>{{ productsSearchExampleWords.join(', ') }}</b>
      </p>
      <div class="products__header-actions">
        <search-input
          v-model="searchText"
          label="Поиск"
          class="products__header-search"
        />
        <ui-select
            v-model="productFetchingLimit"
            :options="limitSelectOptions"
            class="products__header-select"
        />
      </div>
    </div>
    <div class="products__grid">
      <product-card
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :discountPercentage="product.discountPercentage"
        :brand="product.brand"
        :category="product.category"
        :thumbnail="product.thumbnail"
        :images="product.images"
        class="card"
      >
        {{ product }}
      </product-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import productsApi from '@/api/products'
import ProductModel from '@/models/ProductModel'

const initialState: any = inject('initialState')
const productsSearchExampleWords = PRODUCTS_SEARCH_EXAMPLE_WORDS

const products = ref(initialState?.products || [])

const searchText = ref('')
const productFetchingLimit = ref(20)

const debounceTimeout = ref(null)

const limitSelectOptions = [10, 20, 30, 50, 100]

watch([searchText, productFetchingLimit], () => {
  clearTimeout(debounceTimeout.value)

  debounceTimeout.value = setTimeout(() => fetchData(), 200)
})

async function fetchData() {
  const params = {
    q: searchText.value,
    limit: productFetchingLimit.value
  }

  const res = await productsApi.fetchProducts(params)

  products.value = ProductModel.fromArray(res.products)

  if (import.meta.env.SSR) {
    initialState['products'] = products.value
  }
}

onServerPrefetch(fetchData)

if (!products.value.length) {
  fetchData()
}
</script>

<style lang="scss"></style>
