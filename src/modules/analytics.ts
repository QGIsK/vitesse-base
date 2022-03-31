import Plausible from 'plausible-tracker'
import type { AppModule } from '~/types'

export const { enableAutoPageviews, trackEvent, enableAutoOutboundTracking } = Plausible({
  domain: '',
  apiHost: 'https://media.demiann.dev',
  trackLocalhost: true,
})

export const install: AppModule = () => {
  enableAutoPageviews()
  enableAutoOutboundTracking()
}