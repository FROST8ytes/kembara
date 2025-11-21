<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  src: string;
  alt: string;
  caption: string;
  bgColor: string;
  class?: string;
}>();
</script>

<template>
  <figure
    :class="cn(
      'w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow',
      props.class,
    )"
  >
    <img
      class="w-full aspect-4/3 object-cover"
      :src
      :alt
    >
    <figcaption class="border-t-2 text-main-foreground border-border p-4" :style="{ backgroundColor: `var(${bgColor})` }">
      {{ caption }}
    </figcaption>
  </figure>
</template>
