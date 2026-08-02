"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number:"10+",
    label:"Technologies",
  },
  {
    number:"5+",
    label:"Projects",
  },
  {
    number:"2027",
    label:"BCA Graduation",
  },
];


export default function StatsCard(){

return(

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2">

<motion.div
animate={{
 y:[0,-10,0]
}}
transition={{
 duration:4,
 repeat:Infinity
}}
className="
rounded-2xl
border
bg-white/80
px-6
py-4
shadow-xl
backdrop-blur-xl

dark:border-zinc-700
dark:bg-zinc-900/80
"
>

<div className="flex gap-8">

{
stats.map((item)=>(
<div
key={item.label}
className="text-center"
>

<h3 className="text-xl font-bold">
{item.number}
</h3>


<p className="text-xs text-zinc-500">
{item.label}
</p>


</div>
))
}

</div>

</motion.div>

</div>

)

}