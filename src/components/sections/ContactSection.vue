<script setup>
import { computed, ref } from 'vue'
import { useForm, configure } from 'vee-validate'
import * as yup from 'yup'

configure({
  validateOnBlur: true,
})

const { errors, handleSubmit, defineField, resetForm } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Please enter a valid email address.').required('Email is required.'),
    message: yup
      .string()
      .max(1000, 'Message cannot exceed 1000 characters.')
      .required('Message is required.'),
  }),
  validateOnBlur: true,
})

const [email, emailAttrs] = defineField('email')
const [message, messageAttrs] = defineField('message')

const isValid = computed(() => {
  return Object.keys(errors.value).length === 0
})

const isLoading = ref(false)

const sendEmail = (params) => {
  return fetch(params.template, {
    headers: {
      'netlify-emails-secret': import.meta.env.VITE_NETLIFY_EMAILS_SECRET,
    },
    method: 'POST',
    body: JSON.stringify({
      from: params.emailFrom,
      to: params.emailTo,
      subject: params.subject,
      parameters: params.parameters,
    }),
  })
}

const submitEmail = handleSubmit(async (values) => {
  const emailToHealthionParams = {
    emailFrom: values.email,
    emailTo: 'healthion@themomentum.ai',
    subject: `New message from ${values.email}`,
    template: `/.netlify/functions/emails/contact`,
    parameters: {
      message: values.message,
    },
  }
  isLoading.value = true
  // Send email to Healthion
  sendEmail(emailToHealthionParams)
    .then(() => {
      // Send email to user
      const emailToContactFormUserParams = {
        emailFrom: 'no-reply@themomentum.com',
        emailTo: values.email,
        subject: 'Thanks for reaching out to us at FHIR Board!',
        template: `/.netlify/functions/emails/contact-success`,
      }
      sendEmail(emailToContactFormUserParams)
      // Reset form values and errors
      email.value = ''
      message.value = ''
      resetForm()
    })
    .finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <div id="contact" class="contact-section flex flex-col gap-24">
    <div class="view-wrapper flex flex-col items-center justify-center gap-8">
      <h2 class="text-header-xl leading-10 text-center">Need More Info About FHIR Board?</h2>
      <p class="text-header-s text-center text-grey">
        Leave us a message, and we’ll get back to you!
      </p>
    </div>
    <div class="view-wrapper flex flex-col items-center">
      <form class="flex flex-col items-center w-full max-w-[500px]" @submit.prevent="submitEmail">
        <div class="flex flex-col gap-2 w-full">
          <label for="email" class="w-full mb-1">Email</label>
          <input
            v-bind="emailAttrs"
            id="email"
            :class="{ 'input--error': errors.email }"
            name="email"
            class="input"
            type="text"
            v-model="email"
            placeholder="Your email here"
          />
          <small class="h-[16px]">{{ errors.email }}</small>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label for="message" class="w-full mt-6 mb-1">Message</label>
          <textarea
            v-model="message"
            v-bind="messageAttrs"
            id="message"
            name="message"
            class="input input--textarea"
            :class="{ 'input--error': errors.message }"
            type="text"
            rows="6"
            placeholder="Your message here"
          />
          <small class="h-[16px]">{{ errors.message }}</small>
        </div>

        <button
          type="submit"
          :disabled="!isValid || isLoading"
          class="app-button app-button--md w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-section {
  width: 100%;
  padding: 100px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(222, 233, 252, 1) 100%);
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
  justify-content: center;
  flex-direction: column;
}

.input {
  border: 2px solid transparent;
  width: 100%;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10px;
  transition: all 0.5s;

  &--error {
    border: 2px solid #ff4d4f;
  }

  &--textarea {
    height: 100px;
    padding: 12px;
  }
}

.input:hover,
.input:focus {
  border: 2px solid #4a9dec;
  box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
  background-color: white;
}
</style>
