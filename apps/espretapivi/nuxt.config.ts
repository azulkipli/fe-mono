// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  // server: {
  //   hmr: {
  //     port: 3001,
  //   },
  // },
  // },
  modules: [
    [
      "@nuxtjs/eslint-module",
      {
        lintOnStart: true,
      },
    ],
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
});
