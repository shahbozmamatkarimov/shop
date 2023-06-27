// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Shop",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "https://i.ibb.co/PQ4mRtC/myphoto-Round.png",
        }
      ],
      meta: [
        {
          property: "og:title",
          content: "Rachim Borz",
        },
        {
          property: "og:image",
          content: "https://ibb.co/TcDfsK9"
        },
        {
          property: "og:description",
          content: "Shop",
        },
        {
          name: "description",
          content: "Shop"
        }
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
