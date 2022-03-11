<template>
  <div pos="relative">
    <div v-for="(value, key) in positions" :key="key" class="toast-container" :class="value" pos="fixed" p="3">
      <TransitionGroup name="fade" mode="out-in">
        <div v-for="(toast, index) in shownToasts.filter(({position}) => position === key)" :id="`toast-${index}`" :key="index" flex="~" align="items-center" mb="4" text="white" shadow="~" class="max-w-full md:max-w-lg rounded-lg px-6 py-4" :class="bgColor[toast.type]" role="alert">
          <div pr="4" text="white base" font="normal" v-html="toast.message" />
          <button v-if="!toast.autoHide" ml="auto" mx="-1.5" my="-1.5" border="rounded-lg" ring="focus:2 focus:gray-300" p="1.5" display="inline-flex" h="8" w="8" text="gray-500 hover:text" bg="gray-800 hover:gray-700" @click="deleteToast(toast.index)">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { ToastPosition, ToastVariant } from '~/types'
import { activeToasts, deleteToast } from '~/services/toast'

const shownToasts: ComputedRef<{ index: number; message: string; type: ToastVariant; position: ToastPosition; autoHide: boolean }[]> = computed(() => activeToasts.value)

const bgColor = {
  success: 'bg-green-600',
  danger: 'bg-red-600',
  warning: 'bg-yellow-600',
  info: 'bg-gray-800',
}

const positions = {
  'top-left': 'top-0 left-0',
  'top-middle': 'top-0 left-0 md:left-[50%] absolute-middle',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-middle': 'bottom-0 left-0 md:left-[50%] absolute-middle',
  'bottom-right': 'bottom-0 right-0',
}
</script>

<style lang="scss" scoped>
* {
    z-index: 99999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 968px) {
  .absolute-middle {
    transform: translateX(-50%);
  }
}
</style>
