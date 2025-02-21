<template>
  <div id="infrastructure" class="infrastructure-section flex flex-col gap-24">
    <div class="view-wrapper flex flex-col items-center justify-center gap-8">
      <h2 class="text-header-xl leading-10 text-center">
        From FHIR Complexity to Clinical Clarity - No Expertise Required
      </h2>
      <p class="text-header-s text-center text-grey">
        Particularly valuable for healthcare data analysts and organizations working with FHIR
        standards, FHIR Board simplifies the typically complex process of FHIR data analysis.
      </p>
    </div>
    <div class="flex gap-4 view-wrapper flex-wrap">
      <div class="card">
        <span class="text-header-s--bold">For HealthTech Startups</span>
        <span class="text-caption-m text-grey-dark"
          >Healthcare startups can leverage FHIR Board to rapidly prototype and validate their data
          analytics solutions without investing significant resources in building custom FHIR data
          processing infrastructure.
        </span>
      </div>
      <div class="card">
        <span class="text-header-s--bold">For Healthcare Providers</span>
        <span class="text-caption-m text-grey-dark"
          >Healthcare providers can use FHIR Board to quickly visualize and analyze patient data,
          identifying trends in demographics, immunizations, and other clinical patterns. All
          without requiring deep technical expertise in FHIR or database management.
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.infrastructure-section {
  width: 100%;
  padding: 100px 36px 50px 36px;
  background: var(--vt-c-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  background: var(--vt-c-white);
  border: 1px solid #dee8fc;
  border-radius: 12px;
  display: flex;
  padding: 48px;
  width: 100%;
  gap: 24px;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  flex: 1;
  min-width: 300px;

  @media screen and (max-width: 400px) {
    padding: 24px;
  }
}
</style>
