import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export default function useWebWidth() {
  const { width } = useWindowSize()

  const isMobile = computed(() => {
    return width.value < 900
  })

  // expose managed state as return value
  return { isMobile }
}
