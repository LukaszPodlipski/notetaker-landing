<template>
  <div id="hero" class="hero-section">
    <div class="flex flex-col items-center justify-center gap-8 mb-16">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-header-3xl text-gradient text-center">
          Free yourself from the documentation
        </h1>
        <h1 class="text-header-3xl text-gradient text-center">
          burden and focus on patient care.
        </h1>
      </div>
      <p class="text-header-m text-center max-w-[800px]">
        Babla is an open-source tool designed to automate medical documentation
        by transcribing and structuring medical interviews.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 10%,
    rgb(198, 219, 254) 100%
  );

  padding: 160px 24px;
}
</style>
