<script lang="ts">
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const { increase, decrease } = store;
    const count = computed(() => store.count);
    return { increase, decrease, count };
  },
});
</script>
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="prose mb-3 px-2">
    <h1 class="m-0 lg:prose-xl">Hola hali helo</h1>
    <p class="m-0 py-1">Coba ini</p>
    <p class="m-0 py-1">Coba itu</p>
    <p class="m-0 py-1">Coba ini itu</p>
  </div>
  <HelloWorld />
  <div class="prose mb-3 mt-5 px-2">
    <h1 class="m-0 lg:prose-xl">Pinia Demo</h1>
    <p>
      <span class="mr-2">Counter: </span
      ><span class="font-bold">{{ count }}</span>
    </p>
    <button type="button" class="mr-1 mt-3 border px-2 py-1" @click="increase">
      increase
    </button>
    <button type="button" class="mt-3 border px-2 py-1" @click="decrease">
      decrease
    </button>
  </div>
</template>
