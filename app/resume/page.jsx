"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongoose,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  info: [
    {
      fieldName: "Name",
      fieldBalue: "Vandan Patel",
    },
    {
      fieldName: "Phone",
      fieldBalue: "+91 9157121138",
    },
    {
      fieldName: "Email",
      fieldBalue: "vandanp2912@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldBalue: "2",
    },
    {
      fieldName: "Nationality",
      fieldBalue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldBalue: "Available",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  items: [
    {
      company: "Vlocity Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "Dec 2023 - Present",
    },
    {
      company: "Glory Autotech",
      position: "Front-End Developer",
      duration: "Aug 2023 - Dec 2023",
    },
    {
      company: "Glory Autotech",
      position: "Front-End Developer Intern",
      duration: "Fab 2023 - Aug 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  items: [
    {
      institution: "Cohort 2.0",
      degree: "Full Stack Developer",
      duration: "Dec 2023 - Present",
    },
    {
      institution: "Web-Dev Bootcamp Course",
      degree: "Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      institution: "SCET College",
      degree: "Bachelor Engineering in Computer Science",
      duration: "2019 - 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  skillList: [
    {
      icon: <FaHtml5 />,
      degree: "html 5",
    },
    {
      icon: <FaCss3 />,
      degree: "css 3",
    },
    {
      icon: <FaJs />,
      degree: "javascript",
    },
    {
      icon: <FaReact />,
      degree: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      degree: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      degree: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      degree: "node.js",
    },
    {
      icon: <SiExpress />,
      degree: "express.js",
    },

    {
      icon: <SiMongoose />,
      degree: "mongo.db",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap=[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 my-3">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-stretch gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.position}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
