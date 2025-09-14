import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  image,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image/video */}
        {image.includes('project1') || image.includes('project2') || image.includes('project3') || image.includes('project4') || image.includes('project5') || image.includes('project6') ? (
          <video
            src={image}
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}

        {/* View Button */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="View"
              title="View"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] flex-1">{description}</p>
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7 items-stretch">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
