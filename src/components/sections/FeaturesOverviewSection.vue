<template>
  <div id="healthStack" class="hero-section flex flex-col gap-36">
    <div class="flex flex-col justify-center gap-8 max-w-[650px] center">
      <h2 class="text-header-2xl leading-10 text-center">
        What’s behind Babla?

      </h2>
      <div class="flex flex-col justify-center gap-2 max-w-[650px] mt-12">
        <p class="text-header-m">Key features:        </p>
        <ul class="list-disc">
          <li class="text-caption-s">
            Transcription of ongoing or pre-recorded audio with ASR models
          </li>
          <li class="text-caption-s">
            Automatic summarization and note generation with LLM models
          </li>
          <li class="text-caption-s">
            Multiple output formats, ranging from plain text to structured formats such as SOAP or HL7
          </li>
          <li class="text-caption-s">
            Support for both local AI models and external APIs
          </li>
          <li class="text-caption-s">
            Dockerized implementation that allows for easy integration via exposed API endpoints or for direct, local use with the provided demo UI
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  padding: 120px 36px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(98, 169, 240, 0.298) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul > li {
  margin-top: 12px;
}
</style>
