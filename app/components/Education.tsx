import Image from "next/image";

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
      badges: [
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/c74eb3ca-ecfe-4dcf-9130-80d8923877a3/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/bfbfa2ad-09f0-49ab-bef2-8ac0bfe15773/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/e91090b1-32f9-43cc-9e74-1b45f3f4df2f/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/fb2a98c4-033c-4f9e-bbfd-7e3ea548ef55/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/c1d1d5f3-5a5c-4e57-b9f6-bdd860e6e1ee/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/a95e98d1-4f99-4b7b-97fb-c14ead921a2e/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/38382749-c2a8-4fb6-9a3b-ba1960f83b3a/public_url",
        },
      ],
    },
    {
      degree: "Bootcamp de Ciencia de Datos e Inteligencia Artificial",
      institution: "Universidad del Desarrollo",
      logo: "/images/udd-logo.jpg",
      period: "Mar. 2024 - Oct. 2024",
      description:
        "Programa intensivo de 7 meses especializado en análisis de datos, machine learning y deep learning con Python. Dominio de herramientas como Scikit-learn, TensorFlow y Keras para modelamiento supervisado/no supervisado, redes neuronales y visualización de datos.",
      badges: [
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/dbfdbc54-43ae-4775-b465-1c59fec5b457/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/515d4202-028d-4a54-bbd3-2ed92e570ffd/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/5e368d07-c333-4479-8e89-0ff54f9ed90a/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/1e36458c-178b-4609-a945-51b2004b7196/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/22fb99dd-a29d-4894-b881-5e99421bc80f/public_url",
        },
        {
          image: "/images/badge-logo.png",
          url: "https://www.credly.com/badges/b2697be7-8296-4f3e-b2d9-0c566baa488b/public_url",
        },
        {
          image: "/images/badge-logo2.png",
          url: "https://www.credly.com/badges/e05bbdd1-a4c5-4235-9346-dda7161d6735/public_url",
        },
      ],
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
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    {edu.description}
                  </p>

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

                  {edu.badges && edu.badges.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {edu.badges.map((badge, i) => (
                        <a
                          key={i}
                          href={badge.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block hover:scale-110 transition-transform"
                        >
                          <Image
                            src={badge.image}
                            alt={`Badge ${i + 1}`}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
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
