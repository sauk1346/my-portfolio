import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiNestjs,
} from "react-icons/si";

export default function Skills() {
  const firstRow = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ];

  const secondRow = [
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Django", icon: SiDjango, color: "#0C4B33" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
          Habilidades
        </h2>

        <div className="space-y-6">
          {/* Primera fila */}
          <div className="grid grid-cols-7 gap-4">
            {firstRow.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-sm hover:scale-110 transition-transform"
                >
                  <Icon
                    className="text-4xl"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-7 gap-4">
            {secondRow.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-sm hover:scale-110 transition-transform"
                >
                  <Icon
                    className="text-4xl"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
