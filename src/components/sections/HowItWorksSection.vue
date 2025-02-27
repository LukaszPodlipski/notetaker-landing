<template>
  <div id="howItWorks" class="how-it-works-section">
    <div class="flex flex-col items-center justify-center gap-16">
      <h1 class="text-header-3xl text-gradient text-center">
        Test the Open Source Demo
      </h1>

      <div class="card view-wrapper--extedned items-center flex-wrap">
        <div class="flex flex-col gap-4 column">
          <span class="text-header-m--bold"
            >Focus entirely on patient care while Babla handles the
            documentation—automatically transcribing medical interviews,
            summarizing key insights, and structuring notes in your desired
            format. Streamline your workflow and reduce administrative burden.
          </span>
          <span class="text-caption-m text-grey-dark"
            >The application comes as a ready-to-deploy Docker service, complete
            with a demo interface that showcases its core capabilities. Whether
            integrated into an existing system or used as is, the tool
            streamlines the documentation workflow, reducing administrative
            overhead while ensuring no critical detail is missed.
          </span>
          <span class="text-caption-m text-grey-dark"
            >With the ability to generate the output in multiple formats, the
            tool can easily fit into the preexisting EHR environment. See the
            Demo!
          </span>
        </div>
        <div class="card__video-container column h-max">
          <video controls>
            <source
              src="@/assets/videos/howItWorks.mp4#t=0.1"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.how-it-works-section {
  width: 100%;
  padding: 64px 24px 128px 24px;
  background: var(--vt-c-white);
}

.column {
  flex: 1;
  min-width: 200px;
}

.card {
  background: rgb(224, 234, 252);
  background: linear-gradient(
    180deg,
    rgba(224, 234, 252, 1) 23%,
    rgba(249, 251, 254, 1) 100%
  );
  border: 1px solid #dee8fc;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  gap: 64px;
  padding: 84px 64px;

  @media screen and (max-width: 460px) {
    flex-direction: column;
    gap: 32px;
    padding: 36px;
  }

  &__video-container {
    background-color: var(--vt-c-white);
    border-radius: 12px;
    max-width: 600px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
