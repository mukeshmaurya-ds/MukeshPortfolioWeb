"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";


export default function ScrollIndicator(){

return(

<motion.div

animate={{
 y:[0,10,0]
}}

transition={{
 duration:2,
 repeat:Infinity
}}

className="
absolute
bottom-8
left-1/2
-translate-x-1/2
flex
flex-col
items-center
gap-2
text-zinc-500
"

>

<Mouse size={24}/>

<span className="text-xs">
Scroll
</span>

</motion.div>

)

}