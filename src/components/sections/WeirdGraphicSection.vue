<script setup>
import useWebWidth from '@/composables/useWebWidth'

const { isMobile } = useWebWidth()
</script>

<template>
  <div  class="flex flex-col justify-center items-center pb-[180px] px-4 section-bg">
    <h1 class="text-header-xl leading-10 text-center">Effortless notes in 3 simple steps: <br/> Record, click, and review!</h1>
    <div class="flex justify-center items-center">
      <div class="flex mt-16" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" >
        <div class="image-section-wrapper">
          <img src="@/assets/images/1step.svg" loading="lazy" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" data-w-id="14055d71-0f81-37f0-656c-a8cd7bc89bb3" alt="" class="banner-screen-image">
        <div v-if="!isMobile" class="special-subheading purple">Record</div>
      </div>
      <div class="image-section-wrapper">
        <img src="@/assets/images/2step.svg" loading="lazy" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" data-w-id="5560d3c6-fe2f-25d4-3124-2bdf0198a5c8" alt="" class="banner-screen-image">
      </div>
      <div class="image-section-wrapper">
        <img src="@/assets/images/3step.svg" loading="lazy" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" data-w-id="18033f47-f7b8-0b6c-da88-71750b063d1f" alt="" class="banner-screen-image">
        <div v-if="!isMobile  " class="special-subheading purple mr-3">Click</div>
      </div>
      <div class="image-section-wrapper">
          <img src="@/assets/images/4step.svg" loading="lazy" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" data-w-id="6979745d-c730-ef2b-2fd0-989b457cdaf9" alt="" class="banner-screen-image">
          <div v-if="!isMobile" class="special-subheading purple image-4">Review</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-bg {
  background: linear-gradient(180deg,  rgb(198, 219, 254) 10%, rgba(255, 255, 255, 1)  100%);
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
  font-family: Inter Tight, sans-serif;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  position: absolute;
  inset: -2% 0% auto;
}
</style>
