"use client";

import { motion } from "framer-motion";

import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";


const containerVariants = {
  hidden:{
    opacity:0,
  },

  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.15,
    },
  },
};



export default function ProjectGrid(){

  const featuredProjects =
    projects.filter(
      (project)=>project.featured
    );


  const otherProjects =
    projects.filter(
      (project)=>!project.featured
    );


  return (

    <div className="space-y-24">


      {/* Featured Projects */}

      {featuredProjects.length > 0 && (

        <section>

          <div className="mb-10">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-yellow-400
              "
            >

              Featured Work

            </span>


            <h3
              className="
                mt-4
                text-3xl
                font-bold
                text-white-400
              "
            >

              Highlighted Projects

            </h3>


            <p
              className="
                mt-4
                max-w-2xl
                text-gray-400
              "
            >

              Selected projects showcasing modern frontend,
              full-stack, and AI development skills.

            </p>


          </div>



          <motion.div

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once:true,
              margin:"-100px",
            }}

            className="
              space-y-12
            "

          >

            {featuredProjects.map((project)=>(

              <motion.div
                key={project.id}
                variants={{
                  hidden:{
                    opacity:0,
                    y:30,
                  },

                  visible:{
                    opacity:1,
                    y:0,
                  },
                }}
              >

                <ProjectCard
                  project={project}
                />

              </motion.div>

            ))}

          </motion.div>


        </section>

      )}






      {/* Other Projects */}

      {otherProjects.length > 0 && (

        <section>


          <div className="mb-10">


            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
              "
            >

              More Projects

            </span>


            <h3
              className="
                mt-4
                text-3xl
                font-bold
                text-white-400
              "
            >

              Additional Work

            </h3>


            <p
              className="
                mt-4
                max-w-2xl
                text-gray-500
              "
            >

              Additional projects demonstrating
              problem-solving and technical versatility.

            </p>


          </div>




          <motion.div

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once:true,
              margin:"-100px",
            }}

            className="
              grid
              gap-10
              lg:grid-cols-2
            "

          >

            {otherProjects.map((project)=>(

              <motion.div

                key={project.id}

                variants={{
                  hidden:{
                    opacity:0,
                    y:30,
                  },

                  visible:{
                    opacity:1,
                    y:0,
                  },
                }}

              >

                <ProjectCard
                  project={project}
                />

              </motion.div>

            ))}


          </motion.div>


        </section>

      )}


    </div>

  );

}