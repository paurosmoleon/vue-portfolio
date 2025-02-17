<script setup lang="ts">
</script>

<template>
    <header class="w-screen fixed bg-[#0a0a0a] bg-opacity-80 backdrop-blur-md    py-5 md:px-10 px-5 flex flex-row justify-between items-center text-neutral-50 font-mono z-10">
        <a class="cursor-pointer hidden md:block" href="#About">
            <img src="/LogoHeader.svg" width="40" height="40" class=" hover:scale-125 transition-transform" alt="icon header">
        </a>
        <ul class="md:w-auto w-full flex flex-row justify-between p-0  text-lg md:gap-10 ">
            <li><a href="#About" class="hover:text-teal-300 transition-colors duration-300 font-medium">About</a></li>
            <li><a href="#Projects" class="hover:text-teal-300 transition-colors duration-300 font-medium">Projects</a></li>
            <li><a href="#Skills" class="hover:text-teal-300 transition-colors duration-300 font-medium">Skills</a></li>
            <li><a href="#Contact" class="hover:text-teal-300 transition-colors duration-300 font-medium ">Contact</a></li>
        </ul>
    </header>
</template>

<style scoped></style>
