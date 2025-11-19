<script setup lang="ts">
import { Icon } from "@iconify/vue";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Location Management",
    icon: "streamline-ultimate:pin-x-mark",
    description: "Log location of the places that you go!",
    color: "--accent-red",
  },
  {
    title: "Image Management",
    icon: "mdi:image-marker-outline",
    description: "Attach pictures to your travel logs for those sweet memories.",
    color: "--accent-yellow",
  },
  {
    title: "MapLibre Integration",
    icon: "lineicons:map-marker-1",
    description: "Locations displayed in MapLibre for privacy!",
    color: "--accent-green",
  },
];

const polaroidImages = [
  {
    src: "/hero-hiking.jpeg",
    alt: "Hiking",
    caption: "Hiking @ 22 May 2024",
    bgColor: "--accent-blue",
    position: "left-0 top-10 md:left-10",
    rotation: "-rotate-6",
    zIndex: "z-1",
  },
  {
    src: "/hero-birthday.jpeg",
    alt: "Birthday",
    caption: "Birthday @ 26 Aug 2025",
    bgColor: "--accent-pink",
    position: "right-0 top-0 md:right-10",
    rotation: "rotate-3",
    zIndex: "z-0",
  },
  {
    src: "hero-date-night.jpeg",
    alt: "Pizza",
    caption: "Date Night @ 13 Nov 2025",
    bgColor: "--accent-green",
    position: "bottom-0 left-1/4",
    rotation: "-rotate-2",
    zIndex: "z-2",
  },
];
</script>

<template>
  <div class="px-10 md:px-12 py-5 bg-secondary shadow-shadow min-h-screen max-w-7xl border-3 border-black">
    <!-- NAVBAR -->
    <nav class="flex justify-between items-center mb-20">
      <div class="text-2xl font-heading tracking-tight">
        Kembara
      </div>
      <div class="flex justify-end gap-5">
        <ModeToggle />
        <CNButton
          class="h-auto font-bold border-2 shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up"
        >
          Login / Sign Up
        </CNButton>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <main class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <!-- Left Content -->
      <div class="space-y-6">
        <p class="text-lg font-medium">
          Welcome!
        </p>

        <div class="relative inline-block">
          <h1 class="text-6xl md:text-8xl font-heading leading-[0.9]">
            ADVENTURE<br>AWAITS
          </h1>
          <div class="h-2 w-full bg-foreground mt-2" />
        </div>

        <p class="text-xl max-w-md leading-relaxed">
          Log your travels for the sweet sweet memory and nostalgia.
          Every journey leads back to you.
        </p>

        <CNButton
          class="h-auto px-10 py-3 text-lg font-bold border-2 shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up"
        >
          Login / Sign Up
        </CNButton>
      </div>

      <!-- Right Content: Polaroid Collage -->
      <div class="relative h-[400px] w-full flex items-center justify-center lg:justify-end">
        <ImageCard
          v-for="(image, index) in polaroidImages" :key="index" :src="image.src" :alt="image.alt"
          :caption="image.caption" :bg-color="image.bgColor"
          :class="`absolute ${image.position} transform ${image.rotation} ${image.zIndex} achocus:z-10 transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up`"
        />
      </div>
    </main>

    <!-- DIVIDER BAR -->
    <div class="w-full h-4 bg-(--accent-orange) border-2 border-black mb-20 shadow-shadow" />

    <!-- FEATURES SECTION -->
    <section>
      <h2 class="text-5xl font-heading text-center mb-2 underline decoration-4 underline-offset-8">
        FEATURES
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card
          v-for="feature in features" :key="feature.title"
          class="shadow-shadow! border-black p-8 transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up!"
        >
          <div
            class="w-16 h-16 border-2 border-black flex items-center justify-center shadow-shadow"
            :style="{ backgroundColor: `var(${feature.color})` }"
          >
            <Icon :icon="feature.icon" class="h-10 w-auto" />
          </div>

          <CardHeader>
            <CardTitle>{{ feature.title }}</CardTitle>
            <CardDescription>{{ feature.description }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  </div>
</template>
