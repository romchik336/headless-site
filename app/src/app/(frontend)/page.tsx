import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function HomePage() {
  // 1. Підключаємося до нашого Payload
  const payload = await getPayload({ config: configPromise })

  // 2. Дістаємо всі записи з нашої нової колекції 'projects'
  const { docs: projects } = await payload.find({
    collection: 'projects',
  })

  // 3. Верстаємо HTML (з використанням Tailwind CSS для простоти)
  return (
    <main className="p-10 bg-black min-h-screen text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">Мої проекти</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            {project.link && (
              <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                Дивитись проект →
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}