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
  <section id="Skills" class="py-32 h-3/4 md:w-auto  w-[390px] flex flex-col items-center justify-center">
    <div class="container flex flex-col items-center">
      <h2 class="text-5xl text-center font-bold text-white pb-10">
        Technical 
        <span class="text-teal-400">Expertise</span>
    </h2>
        <div class="mt-5 md:w-2/6 w-full text-white md:flex  md:flex-row md:justify-evenly md:items-center grid grid-cols-2 gap-y-5">
        
          <button :class="['py-2 md:w-auto mx-auto w-1/2 px-3 rounded-full', techSelected == button ? ' bg-cyan-400 text-black' : 'bg-slate-800 text-white']" v-for="button in buttons" :key="button.id" @click="selectTech(button)" >{{ button.text }}</button>
          
        </div>
        <div :class="['text-white min-h-60 grid  gap-10  pt-16 grid-cols-1',button.tech.length < 3 ? 'md:grid-cols-2':'md:grid-cols-3' ] " v-for="button in buttons" v-show="techSelected === button">
              <span class=" py-3 w-48 h-14 bg-slate-800 rounded-lg flex flex-row items-center justify-evenly font-semibold animationTech"  v-for="tech in button.tech" >
                <img :src="icons[tech]" alt="tech" class="w-5 h-5">
                {{ tech }}
              </span>
        </div>
    </div>
  </section>
</template>



<style scoped>
  .animationTech{
    animation: techsAnimation 0.5s ease-in-out;
  }

  @keyframes techsAnimation {
    from {
       transform: translateY(-100%);
       opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>