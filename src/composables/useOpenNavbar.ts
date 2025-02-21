import { ref } from 'vue'

const isNavbarOpen = ref(false)

export default function useOpenNavbar() {
  const toggleMenu = () => (isNavbarOpen.value = !isNavbarOpen.value)

  return {
    isNavbarOpen,
    toggleMenu,
  }
}
