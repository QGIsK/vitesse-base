import type { Ref } from 'vue'
import { ref } from 'vue'
import type { ToastPosition, ToastVariant } from '~/types'

export const activeToasts: Ref<{ index: number; message: string; type: ToastVariant; autoHide: boolean; position: ToastPosition }[]> = ref([])

export const deleteToast = (message: number) =>
  activeToasts.value = activeToasts.value.filter(({ message }) =>
    message !== message,
  )

export const addToast = (message: string, type: ToastVariant = 'success', autoHide = true, position: ToastPosition = 'top-right') => {
  activeToasts.value.push({  message, type, autoHide, position })
  if (autoHide)
    setTimeout(() => deleteToast(message), 3500)
}
