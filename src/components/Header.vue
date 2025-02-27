<script setup lang="ts">
import { ref, watch, type HtmlHTMLAttributes } from 'vue';
import { useI18n } from 'vue-i18n';

const {locale ,t} = useI18n()


const actualLang = ref(locale.value)

const setLanguage = (ev:Event) =>  {
    const target = ev.target as HTMLSelectElement
    if (target){
        const lang = target.value
        locale.value = lang
        actualLang.value = lang

    }
}

</script>

<template>
    <header class="w-screen fixed bg-[#0a0a0a] bg-opacity-80 backdrop-blur-md    py-5 md:px-10 px-5 flex flex-row justify-between items-center text-neutral-50 font-mono z-10">
       
       
        <div class="flex flex-row gap-6">
            <a class="cursor-pointer hidden md:block" href="#About">
                <img src="/LogoHeader.svg" width="40" height="40" class=" hover:scale-125 transition-transform" alt="icon header">
            </a>
            <div class="flex flex-row ">
            <img :src="`/header/${actualLang}.png`" alt="">
            <select v-model="locale" @change="setLanguage($event)"  class=" text-center bg-transparent" >
                <option class="bg-[#1e1e1e]" selected value="es-ES">Español</option>
                <option class="bg-[#1e1e1e]" value="en-US">English</option>
            </select>
        </div>


       
            
    </div>
        <ul class="md:w-auto w-full flex flex-row justify-between p-0  text-lg md:gap-10 ">
            <li><a href="#About" class="hover:text-teal-300 transition-colors duration-300 font-medium">{{ $t('aboutHeader') }}</a></li>
            <li><a href="#Projects" class="hover:text-teal-300 transition-colors duration-300 font-medium">{{ $t('projectsHeader') }}</a></li>
            <li><a href="#Skills" class="hover:text-teal-300 transition-colors duration-300 font-medium">{{ $t('skillsHeader') }}</a></li>
            <li><a href="#Contact" class="hover:text-teal-300 transition-colors duration-300 font-medium ">{{ $t('contactHeader') }}</a></li>
        </ul>
    </header>
</template>

<style scoped></style>
