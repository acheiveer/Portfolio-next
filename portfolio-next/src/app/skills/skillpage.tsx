"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const SkillSection = () => {
  const SKILLS = [
    {
      category: "Programming Language",
      value: "C, C++, Java, JavaScript, TypeScript",
    },
    {
      category: "Frameworks/ Libraries",
      value:
        "React.js, Next.js, Node.js, Express.js, EJS",
    },
    {
      category: "Database",
      value: "MySQL, MongoDB, Redis",
    },
    {
      category: "DevOps",
      value: "Docker, Kubernetes, AWS",
    },
  ];
  return (
    <BackgroundGradient className="rounded-[22px] w-[100%] p-4 sm:p-10  dark:bg-dark-color-2">
      <div className="mx-auto">
        {SKILLS.map((skill, key) => (
          <div key={key} className="flex gap-1 md:gap-3 mt-5 text-sm md:text-base">
            <div className="text-white text-lg font-bold">{skill.category}:</div>
            <div>{skill.value}</div>
          </div>
        ))}
      </div>
    </BackgroundGradient>
  );
};

export default SkillSection;
