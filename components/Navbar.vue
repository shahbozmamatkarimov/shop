<template>
  <!-- component -->
  <div class="flex flex-wrap fixed z-50">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-3 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="#">
            <!-- <img class="h-9" src="logo.png" alt="logo"> -->
            Logo Here.
          </a>
          <!-- Nav Links -->
          <ul
            class="hidden md:flex px-4 mx-auto font-semibold font-heading"
          >
            <li>
              <router-link to="/" class="pb-[19px] px-5 hover:text-gray-200"
                >Products</router-link
              >
            </li>
            <li class="category pb-[19px] -mb-4">
              <h1 :class="{'border-b-4 pb-[19px] -mb-6': router.currentRoute.value.path == '/category'}" class="hover:text-gray-200 px-5 cursor-pointer">Catagories</h1>
              <ul
                class="categories mt-5 hidden bg-gray-900 p-2 rounded-lg shadow shadow-white -ml-2 absolute z-50"
              >
                <router-link to="/category">
                  <li
                    class="category_item left-full flex items-center justify-between cursor-pointer hover:bg-white hover:text-black px-1 rounded"
                  >
                    <p>Airpods <i class="bx bx-chevron-right"></i></p>
                    <ul
                      class="items text-white hidden absolute -top-5 min-w-min whitespace-nowrap left-full mt-5 bg-gray-900 p-2 rounded-lg shadow shadow-white -ml-2 z-50"
                    >
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        1st generation
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        2nd generation
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Pro
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Max
                      </li>
                    </ul>
                  </li>
                </router-link>
                <router-link to="/category">
                  <li
                    class="category_item left-full flex items-center justify-between cursor-pointer hover:bg-white hover:text-black px-1 rounded"
                  >
                    <p>Smartpones <i class="bx bx-chevron-right"></i></p>
                    <ul
                      class="items text-white hidden absolute -top-5 min-w-min whitespace-nowrap left-full mt-5 bg-gray-900 p-2 rounded-lg shadow shadow-white -ml-2 z-50"
                    >
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Apple
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Samsung
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Huawei
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Xiaomi
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Google
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        OnePlus
                      </li>
                    </ul>
                  </li>
                </router-link>
                <router-link to="/category">
                  <li
                    class="category_item left-full flex items-center justify-between cursor-pointer hover:bg-white hover:text-black px-1 rounded"
                  >
                    <p>Computers <i class="bx bx-chevron-right"></i></p>
                    <ul
                      class="items text-white hidden absolute -top-5 min-w-min whitespace-nowrap left-full mt-5 bg-gray-900 p-2 rounded-lg shadow shadow-white -ml-2 z-50"
                    >
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Motherboard
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        CPU
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        RAM
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        HDD
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Optical Drive
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        GPU
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Network Card
                      </li>
                      <li class="hover:text-black hover:bg-white px-1 rounded">
                        Cooling System
                      </li>
                    </ul>
                  </li>
                </router-link>
                <router-link to="/category">
                  <li
                    class="category_item flex items-center justify-between cursor-pointer hover:bg-white hover:text-black px-1 rounded"
                  >
                    Televisions <i class="bx bx-chevron-right"></i>
                  </li>
                </router-link>
              </ul>
            </li>
            <li><router-link to="/blog" class="pb-[19px] px-5 hover:text-gray-200">Blog</router-link></li>
            <li><router-link to="about" class="pb-[19px] px-5 hover:text-gray-200">About Us</router-link></li>
            <li><router-link to="contact" class="pb-[19px] px-5 hover:text-gray-200">Contact Us</router-link></li>
          </ul>
          <!-- Header Icons -->
          <div class="hidden xl:flex items-center space-x-5">
            <a class="hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <a class="flex items-center hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span
                  class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"
                >
                </span>
              </span>
            </a>
            <!-- Sign In / Register      -->
            <a class="flex items-center hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- Responsive navbar -->
        <a class="xl:hidden flex mr-6 items-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="flex absolute -mt-5 ml-4">
            <span
              class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
          </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  </div>
  <!-- Does this resource worth a follow? -->
  <!-- <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <a
        title="Follow me on twitter"
        href="https://www.twitter.com/asad_codes"
        target="_blank"
        class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
      >
        <img
          class="object-cover object-center w-full h-full rounded-full"
          src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
        />
      </a>
    </div>
  </div> -->
</template>

<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped>
.router-link-active{
  border-bottom: 5px solid white;
}
.category:hover .categories {
  display: block;
}

.category_item:hover .items {
  display: block;
}
</style>
