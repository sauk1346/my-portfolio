import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
              <Image
                src="/images/perfilV2.png"
                alt="Antonio Morales"
                fill
                className="rounded-full object-cover object-[center_20%] border-4 border-blue-600 dark:border-purple-600"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Antonio Morales
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-zinc-600 dark:text-zinc-400 mb-8">
            Desarrollador Web Fullstack
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Apasionado por crear experiencias web modernas y escalables.
            Especializado en desarrollo frontend y backend con tecnologías como
            React, Node.js, y bases de datos relacionales y NoSQL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Contáctame
            </a>
            <a
              href="/docs/AntonioMorales_CV.pdf"
              download
              className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium transition-colors"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
