<script setup>
import { ref, watch } from 'vue'
import useWebWidth from '@/composables/useWebWidth'
import useOpenNavbar from '@/composables/useOpenNavbar'
import { onClickOutside } from '@vueuse/core'

const { isMobile } = useWebWidth()
const { isNavbarOpen, toggleMenu } = useOpenNavbar()

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
  isNavbarOpen.value = false
}

watch(isMobile, () => {
  if (!isMobile.value) isNavbarOpen.value = false
})

const navbar = ref(null)
onClickOutside(navbar, (event) => (isNavbarOpen.value = false))
</script>

<template>
  <nav
    ref="navbar"
    class="navbar"
    :class="{ 'navbar--solid': isNavbarOpen, 'navbar--solid-border': isNavbarOpen }"
  >
    <div class="view-wrapper flex justify-between items-center py-3 px-6 min-h-[65px]">
      <img class="navbar__logo" src="@/assets/images/logo.png" alt="" />
      <div v-if="!isMobile" class="flex gap-4">
        <button class="text-header-xs" @click="scrollToSection('howItWorks')">Product</button>
        <a
          class="flex items-center"
          target="_blank"
          href="https://github.com/the-momentum/notetaker"
        >
          <button class="text-header-xs">GitHub</button>
        </a>
        <button class="text-header-xs" @click="scrollToSection('faq')">FAQ</button>
        <a
          class="github-button flex items-center"
          href="https://github.com/the-momentum/notetaker"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star the-momentum/notetaker on GitHub"
        ></a>
      </div>
      <button v-else @click="toggleMenu">
        <i class="pi pi-bars text-3xl"></i>
      </button>
    </div>
    <div v-if="isNavbarOpen" class="flex flex-col items-center gap-10 py-10 bg-white">
      <button class="text-header-xs" @click="scrollToSection('howItWorks')">Product</button>
      <a target="_blank" href="https://github.com/the-momentum/notetaker">
        <button class="text-header-xs">GitHub</button>
      </a>
      <button class="text-header-xs" @click="scrollToSection('contact')">Contact</button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  background: rgba(255, 255, 255, 0.531);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(252, 252, 252, 0.3);
  overflow: hidden;

  &--solid-border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__logo {
    height: 40px;
  }

  &--solid {
    background: var(--vt-c-white);
  }
}

.github-button {
  height: 28px;
  max-height: 28px;
  line-height: 28px;
}
</style>
