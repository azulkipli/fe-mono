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
  <div class="mb-3 px-2 prose">
    <h1 class="lg:prose-xl m-0">Hola hali helo</h1>
    <p class="py-1 m-0">Coba ini</p>
    <p class="py-1 m-0">Coba itu</p>
    <p class="py-1 m-0">Coba ini itu</p>
  </div>
  <div class="mt-5 mb-3 px-2 prose">
    <h1 class="lg:prose-xl m-0">Pinia Demo</h1>
    <p>
      <span class="mr-2">Counter: </span
      ><span class="font-bold">{{ count }}</span>
    </p>
    <button type="button" class="border px-2 py-1 mt-3 mr-1" @click="increase">
      increase
    </button>
    <button type="button" class="border px-2 py-1 mt-3" @click="decrease">
      decrease
    </button>
  </div>
</template>
