export default function Projects() {
  const projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demo: string;
    github?: string;
  }> = [
    {
      title: "SaukCode",
      description:
        "Plataforma educativa personal que centraliza apuntes de Ingeniería Informática, ejercicios de algoritmia, material de bootcamps y recursos para el aprendizaje de idiomas extranjeros.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/images/project01.png",
      demo: "https://www.saukcode.cl",
    },
    {
      title: "Neon Havoc",
      description:
        "Videojuego bullet-hell ambientado en un Santiago cyberpunk del año 2087. Desarrollado como proyecto académico con mecánicas de acción frenética y estética neón.",
      technologies: ["Godot", "GDScript", "Game Design"],
      image: "/images/project02.png",
      demo: "https://sauk1346.github.io/neon-havoc/",
    },
    {
      title: "Trigonautas",
      description:
        "Aplicación web interactiva que enseña conceptos de trigonometría mediante mecánicas de juego. Diseñada para hacer el aprendizaje matemático más accesible y entretenido.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Game-based Learning"],
      image: "/images/project03.png",
      demo: "https://sauk1346.github.io/gamification_proyect/",
    },
    {
      title: "Sistema de Detección de Neumonía",
      description:
        "Modelo de deep learning que detecta neumonía en radiografías de tórax mediante redes neuronales convolucionales. Entrenado y documentado en Google Colab.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
      image: "/images/project04.png",
      demo: "https://colab.research.google.com/drive/1RmuHqAVpVBOlC3Dk5FGS08z86xWaimnQ?usp=sharing",
    },
    {
      title: "E-commerce Fullstack",
      description:
        "Tienda online completa con autenticación de usuarios, carrito de compras persistente y panel de gestión de productos. Arquitectura cliente-servidor con API REST.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/project05.png",
      demo: "https://udd-c13-proyecto07-1-frontend.onrender.com/",
    },
    {
      title: "PodsLife Landing Page",
      description:
        "Página de aterrizaje para una marca ficticia de dispositivos tecnológicos. Incluye secciones de características, catálogo de productos, testimonios de clientes y formulario de contacto.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/images/project06.png",
      demo: "https://sauk1346.github.io/UDD_C13_Proyecto03/",
    },
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow block cursor-pointer"
            >
              <div className="relative h-48 bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
