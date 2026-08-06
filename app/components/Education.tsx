import Image from "next/image";
import { PiCertificateBold } from "react-icons/pi";

export default function Education() {
  const education = [
    {
      degree: "Ingeniería Informática",
      institution: "INACAP",
      logo: "/images/inacap-logo.png",
      period: "Mar. 2024 - Mar. 2028",
      description:
        "El Ingeniero en Informática está preparado para gestionar proyectos TI complejos, diseñar soluciones empresariales integrales, liderar equipos de desarrollo y alinear la estrategia tecnológica con los objetivos de negocio.",
      certificates: [
        {
          name: "Desarrollo Aplicaciones Iniciales",
          file: "/docs/cert01.pdf",
        },
        {
          name: "Infraestructura TI Segura",
          file: "/docs/cert02.pdf",
        },
        {
          name: "Desarrollador Full Stack",
          file: "/docs/cert03.pdf",
        },
      ],
    },
    {
      degree: "Analista Programador",
      institution: "INACAP",
      logo: "/images/inacap-logo.png",
      period: "Mar. 2024 - Mar. 2026",
      description:
        "El Analista Programador está capacitado para diseñar, construir e implementar programas computacionales aplicando técnicas modernas de programación, gestionar bases de datos, administrar redes locales y brindar soporte técnico a usuarios.",
      diploma: {
        name: "Certificado Analista Programador",
        file: "/docs/Certificado_AnalistaProgramador.pdf",
      },
      certificates: [
        {
          name: "Desarrollo Aplicaciones Iniciales",
          file: "/docs/cert01.pdf",
        },
        {
          name: "Infraestructura TI Segura",
          file: "/docs/cert02.pdf",
        },
        {
          name: "Desarrollador Full Stack",
          file: "/docs/cert03.pdf",
        },
      ],
    },
    {
      degree: "Bootcamp de Desarrollo Web Fullstack",
      institution: "Universidad del Desarrollo",
      logo: "/images/udd-logo.jpg",
      period: "Ene. 2024 - Ago. 2024",
      description:
        "Programa intensivo de 7 meses cubriendo desarrollo frontend (HTML, CSS, JavaScript, React) y backend (Node.js, bases de datos). Desarrollo de proyectos prácticos con certificación por insignias digitales.",
      diploma: {
        name: "Diploma Desarrollo Web Fullstack",
        file: "/docs/DWFS-Diploma.pdf",
      },
    },
    {
      degree: "Bootcamp de Ciencia de Datos e Inteligencia Artificial",
      institution: "Universidad del Desarrollo",
      logo: "/images/udd-logo.jpg",
      period: "Mar. 2024 - Oct. 2024",
      description:
        "Programa intensivo de 7 meses especializado en análisis de datos, machine learning y deep learning con Python. Dominio de herramientas como Scikit-learn, TensorFlow y Keras para modelamiento supervisado/no supervisado, redes neuronales y visualización de datos.",
      diploma: {
        name: "Diploma Ciencia de Datos e IA",
        file: "/docs/DS-Diploma.pdf",
      },
    },
  ];

  return (
    <section id="educacion" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
          Educación
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white dark:bg-white flex items-center justify-center p-2">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-justify hyphens-auto">
                    {edu.description}
                  </p>

                  {"diploma" in edu && edu.diploma && (
                    <div className="mt-4">
                      <a
                        href={(edu.diploma as { name: string; file: string }).file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-600 text-amber-800 dark:text-amber-300 rounded-lg text-sm font-semibold hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:scale-105 transition-all"
                      >
                        <PiCertificateBold className="text-lg text-amber-600 dark:text-amber-400" />
                        {(edu.diploma as { name: string; file: string }).name}
                      </a>
                    </div>
                  )}

                  {edu.certificates && edu.certificates.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {edu.certificates.map((cert, i) => (
                        <a
                          key={i}
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform inline-block"
                        >
                          {cert.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
