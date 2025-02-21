<script setup>
import { ref } from 'vue'

import { useElementHover } from '@vueuse/core'

const hoveralbeButton = ref()
const isHovered = useElementHover(hoveralbeButton)
</script>

<template>
  <div id="experts" class="hero-section">
    <div class="view-wrapper flex gap-12 items-center justify-center flex-wrap">
      <div class="flex flex-col gap-8 flex-1 min-w-[300px]">
        <img src="@/assets/images/momentum-logo.svg" class="max-w-[200px]" />
        <span class="text-caption-l">Built by Momentum’s Healthcare experts: </span>
        <span class="text-left text-caption-m text-grey-dark"
          >At Momentum, we aim to modernize care delivery with exceptional software. We believe that
          an open, connected healthcare application ecosystem will drive higher-quality care and
          lower costs for healthcare providers, clinics, and patients alike. To help make this
          happen, we provide a comprehensive set of tools and modules that help build healthcare
          applications in days instead of months.
        </span>
        <a
          ref="hoveralbeButton"
          href="https://www.themomentum.ai/"
          target="__blank"
          class="flex gap-2 items-center app-button app-button--text app-button--blue"
        >
          <button class="text-header-s--bold">Visit website</button>
          <i :class="{ arrow__right: isHovered }" class="pi pi-arrow-right arrow"></i>
        </a>
      </div>
      <div class="flex gap-4 column justify-center flex-wrap">
        <div class="linkedin-card">
          <img
            class="linkedin-card__avatar"
            src="@/assets/images/linkedin/piotr-sobusiak.jpg"
            alt=""
          />
          <span class="text-header-xs--bold text-grey-dark">Piotr Sobusiak</span>
          <span>CTO</span>
          <a href="https://www.linkedin.com/in/piotr-sobusiak-8a373b98/" target="_blank">
            <button>
              <i class="pi pi-linkedin text-xl text-grey linkedin-hover"></i>
            </button>
          </a>
        </div>
        <div class="linkedin-card">
          <img
            class="linkedin-card__avatar"
            src="@/assets/images/linkedin/jan-kaminski.jpg"
            alt=""
          />
          <span class="text-header-xs--bold text-grey-dark">Jan Kamiński</span>
          <span>CSO</span>
          <a href="https://www.linkedin.com/in/-jan-kaminski/" target="_blank">
            <button>
              <i class="pi pi-linkedin text-lg text-xl text-grey linkedin-hover"></i>
            </button>
          </a>
        </div>
        <div class="linkedin-card">
          <img
            class="linkedin-card__avatar"
            src="@/assets/images/linkedin/jakub-czaplicki.jpg"
            alt=""
          />
          <span class="text-header-xs--bold text-grey-dark">Jakub Czaplicki</span>
          <span>Lead Devops</span>
          <a href="https://www.linkedin.com/in/jakub-czaplicki-419823339/" target="_blank">
            <button>
              <i class="pi pi-linkedin text-xl text-grey linkedin-hover"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  padding: 100px 36px;
  background: #f0f5fe;
}

.linkedin-card {
  background: var(--vt-c-white);
  border: 1px solid #dee8fc;
  border-radius: 12px;
  display: flex;
  padding: 24px;
  width: 180px;
  min-width: 180px;
  height: min-content;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  &__avatar {
    border-radius: 50%;
    width: 100px;
    min-width: 100px;
    height: 100px;
    min-height: 100px;
  }
}

.arrow {
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.3s ease;

  &__right {
    transform: translateX(5px);
  }
}

.linkedin-hover {
  transition: color 0.3s ease;

  &:hover {
    color: var(--vt-c-blue);
  }
}
</style>
