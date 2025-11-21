<script setup lang="ts">
import { Icon } from "@iconify/vue";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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

const faqs = [
  {
    value: "item-1",
    question: "Is Kembara free to use?",
    answer: "Yes! Kembara is currently a free and open-source project for logging your personal travel memories.",
  },
  {
    value: "item-2",
    question: "Is my location data private?",
    answer: "Absolutely. We use MapLibre for privacy-focused mapping, and your logs are only visible to you unless you choose to share them.",
  },
  {
    value: "item-3",
    question: "Can I export my data?",
    answer: "We are working on an export feature that will allow you to download all your photos and logs as a JSON file.",
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
        <Button
          class="h-auto font-bold border-2 shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up"
        >
          Login / Sign Up
        </Button>
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

        <Button
          class="h-auto px-10 py-3 text-lg font-bold border-2 shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up"
        >
          Login / Sign Up
        </Button>
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
    <section class="mb-32 mt-24">
      <h2 class="text-5xl font-heading text-center mb-16 underline decoration-4 underline-offset-8">
        HOW IT WORKS
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-black -z-10 -translate-y-1/2" />

        <Card class="bg-secondary border-2 border-black shadow-shadow! relative overflow-visible">
          <div
            class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-(--accent-blue) border-2 border-black flex items-center justify-center text-xl font-bold rounded-full z-10"
          >
            1
          </div>
          <CardHeader class="mt-6">
            <CardTitle class="text-center text-xl">
              Snap & Upload
            </CardTitle>
          </CardHeader>
          <CardContent class="text-center text-muted-foreground">
            Take a photo of your favorite moment and upload it directly to the platform.
          </CardContent>
        </Card>

        <Card class="bg-secondary border-2 border-black shadow-shadow! relative overflow-visible">
          <div
            class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-(--accent-pink) border-2 border-black flex items-center justify-center text-xl font-bold rounded-full z-10"
          >
            2
          </div>
          <CardHeader class="mt-6">
            <CardTitle class="text-center text-xl">
              Tag Location
            </CardTitle>
          </CardHeader>
          <CardContent class="text-center text-muted-foreground">
            Our map integration automatically pins your memory to the exact spot it happened.
          </CardContent>
        </Card>

        <Card class="bg-secondary border-2 border-black shadow-shadow! relative overflow-visible">
          <div
            class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-(--accent-yellow) border-2 border-black flex items-center justify-center text-xl font-bold rounded-full z-10"
          >
            3
          </div>
          <CardHeader class="mt-6">
            <CardTitle class="text-center text-xl">
              Relive Forever
            </CardTitle>
          </CardHeader>
          <CardContent class="text-center text-muted-foreground">
            Look back at your travel log anytime. Your privacy is our priority.
          </CardContent>
        </Card>
      </div>
    </section>

    <section class="mb-24 max-w-3xl mx-auto w-full">
      <h2 class="text-5xl font-heading text-center underline decoration-4 underline-offset-8 mb-16">
        FEATURES
      </h2>

      <Accordion type="single" collapsible class="w-full space-y-4">
        <AccordionItem
          v-for="faq in faqs" :key="faq.value" :value="faq.value"
          class="bg-primary border-2 border-black shadow-shadow px-4 data-[state=open]:shadow-hover-down transition-all duration-200"
        >
          <AccordionTrigger class="font-bold text-lg hover:no-underline py-4">
            {{ faq.question }}
          </AccordionTrigger>
          <AccordionContent class="text-muted-foreground text-base border-t-2 border-black/10 pt-4 pb-4">
            {{ faq.answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <footer class="mt-20 border-t-4 border-black pt-10 w-full mb-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <h1 class="text-3xl font-heading">
            Kembara <span class="font-light text-base">Made with love ❤️</span>
          </h1>
          <p class="text-sm mt-2">
            © 2025 FROST8ytes Kingdom. All rights reserved.
          </p>
        </div>

        <div class="flex gap-4">
          <NuxtLink to="https://github.com/FROST8ytes/kembara" external no-rel no-prefetch target="_blank">
            <Button
              size="icon" variant="link"
              class="border-2 border-black shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up bg-(--accent-blue)"
            >
              <Icon
                icon="mdi:github" class="h-5 w-5 stroke-primary-foreground"
                :style="{ color: 'var(--primary-foreground)' }"
              />
              <span class="sr-only">GitHub</span>
            </Button>
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/ammarfmr" external no-rel no-prefetch target="_blank">
            <Button
              size="icon" variant="link"
              class="border-2 border-black shadow-shadow transition-all ease-in-out achocus:-translate-y-0.5 achocus:-translate-x-0.5 achocus:shadow-hover-up bg-(--accent-pink)"
            >
              <Icon icon="mdi:linkedin" class="h-5 w-5" :style="{ color: 'var(--primary-foreground)' }" />
              <span class="sr-only">LinkedIn</span>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
