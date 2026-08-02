"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Calendar,
  Clock3,
  Users,
} from "lucide-react";


interface ProjectStatsProps {

  metrics: {
    label: string;
    value: string;
  }[];

}



const iconMap = [
  Calendar,
  Clock3,
  Users,
  Activity,
  BarChart3,
];



export default function ProjectStats({
  metrics,
}: ProjectStatsProps) {


  return (

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

      {metrics.map((metric, index) => {


        const Icon =
          iconMap[index % iconMap.length];


        return (

          <motion.div

            key={`${metric.label}-${index}`}


            initial={{
              opacity:0,
              y:20,
            }}


            whileInView={{
              opacity:1,
              y:0,
            }}


            viewport={{
              once:true,
            }}


            transition={{
              delay:index * 0.08,
              duration:0.4,
            }}


            whileHover={{
              y:-4,
              scale:1.02,
            }}


            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-white/10
              hover:shadow-lg
              hover:shadow-cyan-500/10
            "

          >


            <div className="mb-3 flex items-center gap-2">


              <Icon
                className="
                  h-4
                  w-4
                  text-cyan-400
                "
              />


              <span
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-400
                "
              >

                {metric.label}

              </span>


            </div>



            <p
              className="
                text-base
                font-semibold
                text-white
              "
            >

              {metric.value}

            </p>



          </motion.div>

        );


      })}


    </div>

  );

}