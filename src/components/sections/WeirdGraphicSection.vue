<script setup>
import useWebWidth from '@/composables/useWebWidth';

const { isMobile } = useWebWidth();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center pb-[180px] px-4 section-bg"
  >
    <h1 class="text-header-xl leading-10 text-center">
      Effortless notes in 3 simple steps: <br />
      Record, click, and review!
    </h1>
    <div class="flex justify-center items-center">
      <img src="@/assets/images/hero-image.png" class="max-w-[1200px] w-full" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-bg {
  background: linear-gradient(
    180deg,
    rgb(198, 219, 254) 10%,
    rgba(255, 255, 255, 1) 100%
  );
}

.image-section-wrapper {
  height: 100%;
  position: relative;
}
.banner-screen-image {
  object-fit: contain;
  width: auto;
  height: 100%;
  position: relative;
}
.special-subheading.purple {
  z-index: 9999;
  color: rgb(67, 56, 202);
  text-align: left;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5px;
  padding-top: 18px;
  font-family:
    Inter Tight,
    sans-serif;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  position: absolute;
  inset: -2% 0% auto;
}
</style>
