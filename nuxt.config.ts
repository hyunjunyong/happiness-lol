// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
})