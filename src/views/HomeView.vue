<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import HealthStackSection from '@/components/sections/HealthStackSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import ExpertsSection from '@/components/sections/ExpertsSection.vue'
import FAQSection from '@/components/sections/FAQ.vue'
import WeirdGraphicSection from '@/components/sections/WeirdGraphicSection.vue'
import CallMeMaybeButton from '@/components/sections/CallMeMaybeButton.vue'
</script>

<template>
  <div class="mt-20">
    <HeroSection />
    <WeirdGraphicSection />
    <HowItWorksSection />
    <HealthStackSection />
    <ExpertsSection />
    <CallMeMaybeButton />
    <FAQSection />
  </div>
</template>

