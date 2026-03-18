import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-center">
          Contacto
        </h2>
        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-sm">
          <p className="text-center text-zinc-600 dark:text-zinc-300 mb-8">
            ¿Tienes algún proyecto en mente o buscas colaboración? No dudes en contactarme.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:atmoralesc@gmail.com"
              className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                <p className="text-zinc-900 dark:text-zinc-50 font-medium">
                  atmoralesc@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/56964610880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaWhatsapp className="text-2xl text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">WhatsApp</p>
                <p className="text-zinc-900 dark:text-zinc-50 font-medium">
                  +56 9 6461 0880
                </p>
              </div>
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              También puedes encontrarme en
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/sauk1346"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-700/50 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/atmoralesc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-700/50 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
