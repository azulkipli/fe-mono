<script lang="ts" setup></script>

<template>
  <div id="defaultLayout">
    <!-- Layout: default -->
    <header>
      <ul class="list-none m-2">
        <li class="inline">
          <NuxtLink
            to="/"
            class="px-2 py-1 font-semibold duration-100 hover:text-gray-500 text-linkedin-primary"
          >
            Home
          </NuxtLink>
        </li>
        <li class="inline">
          <NuxtLink
            to="/about"
            class="px-2 py-1 font-semibold duration-100 hover:text-gray-500 text-linkedin-primary"
          >
            About
          </NuxtLink>
        </li>
        <li class="inline">
          <NuxtLink
            to="/contact"
            class="px-2 py-1 font-semibold duration-100 hover:text-gray-500 text-linkedin-primary"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </header>
    <main class="p-3">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
