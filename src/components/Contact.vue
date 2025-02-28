<script setup lang="ts">
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css';
import Emailjs from 'emailjs-com'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()

const copyEmail = () => {
    copyToats()
   navigator.clipboard.writeText('paurosmoleon@hotmail.com')
}


const form = ref({
  name: '',
  email: '',
  message: ''
});
const sendMessage = () => {
    const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
    }


    Emailjs.send('service_8jlwxav','template_hv939do',templateParams,'r_4UhPc2JRm6ZEvxL')
            .then(response => {
                messageToats()
            })
            .catch(err => {
                console.log(err)
            })
}

const toats = new Notyf()

const copyToats = () => {
   toats.success('Email copied to clipboard')
}
const messageToats = () => {
    toats.success('Message sent')
}


</script>


<template>
    <section id="Contact" class="py-32 h-3/4 md:w-auto  w-screen flex flex-col items-center justify-center">
        <h2 class="text-5xl text-center m-auto font-bold text-white pb-10">
        {{ $t('contactTitle1')}} 
        <span class="text-teal-400">{{ $t('contactTitle2')}} </span>
         </h2>
        <div class="container grid md:grid-cols-2  grid-cols-1  text-white ">
            <div class="w-full flex flex-col justify-center items-center ">
                <h3 class="text-xl pb-8 ">{{ $t('contactInfo')}} </h3>
              <div class=" flex flex-col md:items-start items-center    gap-9">
                <span class="bg-[#1a1a1a] flex flex-row justify-around w-52 p-3 rounded-lg text-neutral-100 ">
                    <img src="/Contacts/user.svg" class="w-5 h-5" alt="">
                     Pau Ros Moleon
                </span>
                <span class="bg-[#1a1a1a] flex flex-row justify-around items-center w-80 p-3 rounded-lg text-neutral-100 ">
                    <img src="/Contacts/email.svg" class="w-5 h-5" alt="">
                     paurosmoleon@hotmail.com
                     <button @click="copyEmail"><img src="/Contacts/copy.svg" class="w-5 h-5" alt=""></button>
                </span>
                <span class="bg-[#1a1a1a] flex flex-row justify-around items-center w-52 p-3 rounded-lg text-neutral-100 ">
                    <img src="/Contacts/phone.svg" class="w-5 h-5" alt="">
                     (+34) 656 91 20 67 
                </span>
                <span class="bg-[#1a1a1a] flex flex-row justify-around items-center w-52 p-3 rounded-lg text-neutral-100 ">
                    <img src="/Contacts/cv.svg" class="w-7 h-7" alt="">
                     {{$t('downloadCV')}}
                     <a href="/CV.pdf" download="pau_ros_moleon_CV.pdf"><img src="/Contacts/download.svg" class="w-6 h-6" alt=""></a>
                </span>
                </div>
            </div>
            <div class="flex flex-col  gap-6 md:pt-0 pt-10 md:w-auto w-1/2 mx-auto">
                <h3 class="text-xl">{{ $t('contactMessage')}} </h3>
                <form @submit.prevent="sendMessage" method="post" class="flex flex-col gap-5">
                    <input type="text" name="name" v-model="form.name" placeholder="Your name" class="px-4 py-3 bg-[#1a1a1a] rounded-lg  text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 " required>
                    <input type="email" name="email" v-model="form.email" id="email_input"  placeholder="Your email" class="px-4 py-3 bg-[#1a1a1a] rounded-lg  text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 " required>
                    <textarea name="message" v-model="form.message"  cols="50"  rows="5" placeholder="Your Message" class="p-2 bg-[#1a1a1a] rounded-lg  text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"  required></textarea>
                    <button type="submit"  class="p-4 bg-sky-400 rounded-lg text-neutral-950 font-bold active:opacity-80" >{{ $t('contactButton') }}</button>
                </form>
            </div>
        </div>
    </section>
</template>



