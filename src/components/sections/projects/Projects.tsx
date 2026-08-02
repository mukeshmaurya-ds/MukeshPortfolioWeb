"use client";

import { motion } from "framer-motion";
import ProjectGrid from "./ProjectGrid";


export default function Projects() {

  return (

    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        relative
        py-20
        sm:py-24
        lg:py-32
      "
    >

      {/* Background Effects */}

      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />


        <div
          className="
            absolute
            right-0
            bottom-0
            h-80
            w-80
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

      </div>




      <div
        className="
          container
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
            margin:"-100px",
          }}

          transition={{
            duration:0.6,
          }}

          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "

        >


          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-700/20
              bg-cyan-700/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-500
            "
          >

            Projects

          </span>



          <h2
            id="projects-heading"
            className="
              mt-6
              text-4xl
              font-bold
              text-white-400
              sm:text-5xl
            "
          >

            Featured Work & Case Studies

          </h2>



          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-500
            "
          >

            A collection of projects showcasing software
            engineering, data science, machine learning,
            and AI-powered solutions.

          </p>


        </motion.div>



        <ProjectGrid />


      </div>


    </section>

  );

}