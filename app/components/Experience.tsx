import {
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Web Fullstack",
      company: "ITRed SpA",
      period: "Dic. 2025 - Mar. 2026",
      description: "Desarrollo y mantención de sitios web y tiendas virtuales a medida.",
      achievements: [
        "Migré más de 400 artículos de ayuda desde tablas de base de datos MySQL a sistema de archivos PHP, reduciendo la carga de consultas y simplificando el mantenimiento del contenido.",
        "Implementé integración completa con la API de pagos Flow Chile en flujo de compra de dispositivos, habilitando pagos en línea para usuarios del portal tuusantiago.cl.",
        "Desarrollé páginas dinámicas con lógica de parámetros GET para filtrado y navegación de contenido, siguiendo estándares de codificación internos de la empresa.",
        "Participé en trabajo colaborativo con equipo de desarrollo en proyectos de sitios web y tiendas virtuales a medida con stack HTML5, CSS, PHP, JavaScript y MySQL.",
      ],
      technologies: [
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Desarrollador Web Backend",
      company: "Digital Wave",
      period: "Dic. 2024 - Mar. 2025",
      description: "Sistema de Gestión Jurídica con Asistente IA Integrado.",
      achievements: [
        "Diseñé microservicios con APIs intermedias para desacoplar servicios de backend, mejorando la escalabilidad y el mantenimiento del sistema.",
        "Modelé esquemas relacionales en PostgreSQL para soportar lógica de negocio en proyectos con requerimientos legales y de datos complejos.",
        "Colaboré en equipos interdisciplinarios con abogados, científicos de datos y diseñadores UX/UI, adaptando soluciones a requerimientos no técnicos.",
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
              {exp.description && (
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {exp.description}
                </p>
              )}
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