<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {t} = useI18n()
</script>


<template >
    <footer class="container mx-auto h-28 md:px-0 px-5 flex flex-row justify-between text-white items-center " >

            {{ $t('reserved') }}
            <div class="flex flex-row  gap-5 ">
                <a href="https://github.com/paurosmoleon" target="_blank"><img src="/footer/github.svg" class="w-10 h-10 brightness-50 hover:brightness-125 " alt=""></a>
                <a href="https://www.linkedin.com/in/paurosmoleon/" target="_blank" ><img src="/footer/linkedin.svg" class="w-10 h-10  brightness-50 hover:brightness-125" alt=""></a>
                
            </div>
        </footer>
</template>