import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'
import type { HeadClient } from '@vueuse/head'

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>
  router: HasRouter extends true ? Router : undefined
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined
  head: HeadClient | undefined
}

export type AppModule = (ctx: AppContext) => void

export interface CustomTargetEvent<T extends HTMLElement> extends Event {
  target: T
  clientY: number
  clientX: number
}

export type ToastVariant =
  'success' | 'danger' | 'warning' | 'info'

export type ToastPosition =
'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
