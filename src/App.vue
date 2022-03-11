<script setup lang="ts">
import { addToast } from '~/services/toast'

useHead({
  meta: [
    { name: 'description', content: 'Vitesse Base' },
  ],
})

onMounted(() => {
  setTimeout(() => {
    addToast(`Whats this?`, 'info', false, 'bottom-middle')
  }, 5000,
  )
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">     
        <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style lang="scss">

</style>
