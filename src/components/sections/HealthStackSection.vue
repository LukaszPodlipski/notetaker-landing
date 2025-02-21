<script setup>
import useWebWidth from '@/composables/useWebWidth'


const { isMobile } = useWebWidth()
</script>

<template>
  <div id="healthStack" class="hero-section flex flex-col gap-36">
    <div class="flex gap-24 justify-between flex-wrap">
      <div class="flex flex-col items-start justify-center gap-8 max-w-[600px] column center">
        <h2 class="text-header-2xl leading-10 text-left">What’s behind Babla?</h2>
        <div class="flex flex-col justify-center gap-2 max-w-[650px] mt-4">
          <p class="text-header-m">Key features:        </p>
          <ul class="list-disc">
            <li class="text-caption-m mb-2">
              Transcription of ongoing or pre-recorded audio with ASR models
            </li>
            <li class="text-caption-m mb-2">
              Automatic summarization and note generation with LLM models
            </li>
            <li class="text-caption-m mb-2">
              Multiple output formats, ranging from plain text to structured formats such as SOAP or HL7
            </li>
            <li class="text-caption-m mb-2">
              Support for both local AI models and external APIs
            </li>
            <li class="text-caption-m">
              Dockerized implementation that allows for easy integration via exposed API endpoints or for direct, local use with the provided demo UI
            </li>
          </ul>
        </div>
      </div>
      <div v-if="!isMobile" class="video-container column center">
        <video src="@/assets/videos/patient.mp4" autoplay muted loop type="video/mp4" />
      </div>
    </div>
    <div class="flex gap-24 justify-between flex-wrap-reverse">
      <div v-if="!isMobile" class="max-w-[576px] center">
        <img src="@/assets/images/image1.jpg" class="rounded-3xl w-full h-auto block" />
      </div>
      <div class="flex flex-col items-start justify-center gap-8 max-w-[600px] column center">
        <h2 class="text-header-2xl leading-10 text-left">Why open source?</h2>
        <sp class="text-header-m text-left">
          Most AI-based solutions run into compliance issues in medical settings - from integration with third  parties to data processing policies. Blabla offers a wide range of options to suit your exact level of data protection. With modular design in mind, you can easily set it up locally, using open models, running on your machine or with trusted LLM providers as you need. An open-source approach means that you gain exact control over where and how your data is handled.
        </sp>
      </div>
    </div>
    <div class="flex gap-6" :class="{ 'flex-col': isMobile }">
      <div class="flex items-center gap-2  text-caption-m">
        &#x2713; <span> Trusted by</span>
        <span class="text-blue">5 star agencies</span>
      </div>
      <div class="flex items-center gap-2 text-caption-m">
        &#x2713; <span>Accurate and</span>
        <span class="text-blue">easy to use</span>
      </div>
      <div class="flex items-center gap-2 text-caption-m">
        &#x2713; <span>Enabling</span>
        <span class="text-blue">Better patient care</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.text-blue {
  color: rgb(42, 75, 203);
  font-weight: 600;
}

.hero-section {
  width: 100%;
  padding: 140px 36px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(98, 169, 240, 0.298) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.column {
  flex: 1;
  min-width: 300px;

  @media screen and (max-width: 460px) {
    min-width: 200px;
  }
}


.video-container {
  max-width: 576px;
  position: relative;
  display: inline-block;
}

.video-container video {
  display: block;
  border-radius: 32px;
}


</style>
