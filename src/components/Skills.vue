<script setup lang="ts">
import { ref } from 'vue';

const icons: Record<string,string> = {
  //Iconos front
  'TailwindCSS': '/techs/tailwind.svg',
  'Vue':'/techs/vue.svg',
  'React':'/techs/react.svg',
  'Typescript':'/techs/typescript.svg',
  //Iconos Back
  'Node.js':'/techs/nodejs.svg',
  'Python':'/techs/python.svg',
  'Golang':'/techs/golang.svg',
  //Icons DB
  'PostgreSQL': '/techs/postgreSQL.svg',
  'Supabase': '/techs/supabase.svg',
  'Turso':'/techs/turso.svg',
  //Icons DevOps
  'Git': '/techs/git.svg',
  'Docker': '/techs/docker.svg'

}

const buttons = ref([
  {id:1, text: "Frontend",tech:['React','Vue','Typescript','TailwindCSS']},
  {id:2,text: "Backend",tech:['Node.js','Python','Golang']},
  {id:3, text: "Database",tech:['PostgreSQL','Supabase','Turso']},
  {id:4, text: "DevOps",tech:['Git','Docker']},

])

const techSelected = ref(buttons.value[0]) 


const selectTech = (button:  { id: number; text: string; tech: string[]; }) => {
   techSelected.value = button
}
</script>

<template>
  <section class="py-32 h-3/4 flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <h2 class="text-5xl font-bold text-white pb-10">
        Featured
        <span class="text-teal-400">Projects</span>
    </h2>
        <div class="mt-5 w-2/6 text-white flex  flex-row justify-evenly items-center">
        
          <button :class="[' py-2 px-3 rounded-full', techSelected == button ? ' bg-cyan-400 text-black' : 'bg-slate-800 text-white']" v-for="button in buttons" :key="button.id" @click="selectTech(button)" >{{ button.text }}</button>
          
        </div>
        <div :class="['text-white grid  gap-10  pt-16',button.tech.length < 3 ? 'grid-cols-2':'grid-cols-3' ] " v-for="button in buttons" v-show="techSelected === button">
              <span class=" py-3 w-48 bg-slate-800 rounded-lg flex flex-row items-center justify-evenly font-semibold"  v-for="tech in button.tech" >
                <img :src="icons[tech]" alt="tech" class="w-5 h-5">
                {{ tech }}
              </span>
        </div>
    </div>
  </section>
</template>
