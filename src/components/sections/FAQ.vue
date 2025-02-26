<script setup>
import { ref } from 'vue'

const faqItems = ref([
  {
    question: 'Are you HIPAA and GDPR compliant?',
    answer:
      "Notetaker can be easily configured to be HIPPA and GDPR compliant - we provide all the necessary tools to rely fully on local models using WhisperX and Ollama, making it simply a matter of selecting the right options during setup.",
    collapsed: true,
  },
  {
    question: 'Is it open source? ',
    answer: "Yes, it is open source. You can find the source code on GitHub.",
    collapsed: true,
  },
  {
    question: 'Do you train any models with my data?',
    answer:
      "No, we do not train any models with your data. We use pre-trained models from the community.",
    collapsed: true,
  },
  {
    question: 'How can I implement this if I’m not technical? ',
    answer: 'We have a demo UI that you can use to test the solution. If you need a custom implementation, please contact us.',
    collapsed: true,
  },
])
</script>

<template>

  <div id="faq" class="faq-section flex flex-col gap-24">
    <div class="view-wrapper flex flex-col items-center justify-center gap-8">
      <h2 class="text-header-xl leading-10 text-center">Frequently Asked Questions</h2>
      <p class="text-header-s text-center text-grey">
        Explore the answers to common queries and make the most of your Healthstack experience.
      </p>
    </div>
    <div class="flex flex-col view-wrapper">
      <button
        v-for="(item, idx) in faqItems"
        :key="idx"
        class="faq-item"
        :class="{ 'faq-item--border': idx !== faqItems.length - 1 }"
        @click="item.collapsed = !item.collapsed"
      >
        <div class="flex w-full justify-between gap-4">
          <span class="text-caption-m--bold text-left">{{ item.question }}</span>
          <i class="pi text-xs font-bold" :class="[item.collapsed ? 'pi-plus' : 'pi-minus']"></i>
        </div>
        <span
          v-if="!item.collapsed"
          v-html="item.answer"
          class="text-header-xs text-left text-grey"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq-section {
  width: 100%;
  padding: 100px 36px;
  background: var(--vt-c-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.faq-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding: 24px 0;

  &--border {
    border-bottom: 1px solid var(--vt-c-blue-light);
  }
}
</style>
