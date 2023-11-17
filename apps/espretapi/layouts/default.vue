<script lang="ts" setup></script>

<template>
  <div id="defaultLayout">
    <!-- Layout: default -->
    <header>
      <ul class="m-2 list-none">
        <li class="inline">
          <NuxtLink
            to="/"
            class="px-2 py-1 font-semibold text-linkedin-primary duration-100 hover:text-gray-500"
          >
            Home
          </NuxtLink>
        </li>
        <li class="inline">
          <NuxtLink
            to="/about"
            class="px-2 py-1 font-semibold text-linkedin-primary duration-100 hover:text-gray-500"
          >
            About
          </NuxtLink>
        </li>
        <li class="inline">
          <NuxtLink
            to="/contact"
            class="px-2 py-1 font-semibold text-linkedin-primary duration-100 hover:text-gray-500"
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
