<template>
  <div>
    <header class="pb-16">
      <Navbar />
    </header>
    <main
      class="bg-gray-200 pb-20 overflow-y-auto max-h-screen min-h-screen overflow-hidden"
    >
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
