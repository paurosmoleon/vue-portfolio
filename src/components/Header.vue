<script setup lang="ts">
    import Logo from  "../assets/LogoHeader.svg"
</script>

<template>
    <header class="w-screen bg-zinc-800 bg-opacity-80 backdrop-blur-lg py-5 px-10 flex flex-row justify-between items-center text-neutral-50 font-mono ">
        <a class="cursor-pointer">
            <img src="../assets/LogoHeader.svg" width="40" height="40" class=" hover:scale-125 transition-transform" alt="">
        </a>
        <ul class="flex flex-row justify-center text-lg gap-10">
            <li><a href="" class="hover:text-teal-300 transition-colors duration-300 font-medium">About</a></li>
            <li><a href="" class="hover:text-teal-300 transition-colors duration-300 font-medium">Projects</a></li>
            <li><a href="" class="hover:text-teal-300 transition-colors duration-300 font-medium">Skills</a></li>
            <li><a href="" class="hover:text-teal-300 transition-colors duration-300 font-medium">Contact</a></li>
        </ul>
    </header>
</template>

<style scoped></style>
