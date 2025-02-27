<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {t} = useI18n()
</script>

<template>
    <section id="About" class="md:w-5/6 w-full  pt-24 pb-32 z-0 mx-auto">
        <div class="container  h-3/6  md:mx-auto  py-4">
            <div class="flex flex-row  items-center  md:w-auto w-screen md:text-start  text-center justify-evenly  gap-12 ">
                <div class="space-y-12 ">
                    <div class="w-2/4 h-2/4 rounded-xl mx-auto md:hidden block aspect-square overflow-hidden shadow-[3px_0_10px_rgba(45,212,191,1)]">
                        <img src="/public/image.jpg" class="w-full h-full object-cover" alt="Image for logo">
                     </div>
                    <h1 class="text-5xl font-bold  text-white">{{ $t('welcome') }} <span class="text-teal-400"> Pau Ros
                            Moleon</span></h1>
                    <h2 class="text-3xl text-gray-400">{{ $t('devZone') }}</h2>
                    <p className="text-lg text-gray-300 text-pretty">
                      {{ $t('heroText') }}
                    </p>
                    <div class="flex flex-row md:justify-start justify-center space-x-4">
                        <a href="#Contact"
                            className="bg-teal-400 text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300">
                            {{ $t('heroButton1') }}
                        </a>
                        <a href="#Projects"
                            className="border border-teal-400 text-teal-400 font-bold py-3 px-8 rounded-full hover:bg-teal-400 hover:text-black transition duration-300">
                            {{ $t('heroButton2') }}
                        </a>
                    </div>
                </div>
                <div class="w-2/5 h-2/5 rounded-full md:block hidden aspect-square overflow-hidden shadow-[3px_0_10px_rgba(45,212,191,1)]">
                 <img src="/public/image.jpg" class="w-full h-full object-cover" alt="Image for logo">
                </div>
            </div>


        </div>
    </section>
</template>

<style scoped></style>
