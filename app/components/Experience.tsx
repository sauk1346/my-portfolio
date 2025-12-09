import {
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiDocker,
  SiGit,
  SiNestjs,
} from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Backend",
      company: "Digital Wave",
      period: "Dic. 2024 - Mar. 2025",
      description:
        "Sistema de Gestión Jurídica con Asistente IA Integrado",
      achievements: [
        "Diseño e implementación de arquitectura de Microservicios y APIs RESTful escalables.",
        "Modelado y optimización de bases de datos relacionales con PostgreSQL.",
        "Colaboración activa en equipos interdisciplinarios bajo metodologías ágiles, asegurando calida y consistencia del código.",
      ],
      technologies: [
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
          Experiencia
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">
                      ▹
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-700/50 px-3 py-2 rounded-lg hover:scale-105 transition-transform"
                          title={tech.name}
                        >
                          <Icon
                            className="text-lg"
                            style={{ color: tech.color }}
                          />
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
