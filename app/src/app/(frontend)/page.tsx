import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  // 1. Отримуємо обрану мову з параметрів (за замовчуванням 'uk')
  const { lang = 'uk' } = await searchParams
  
  const payload = await getPayload({ config: configPromise })

  // 2. Робимо запит, вказуючи потрібну мову (locale)
  const { docs: projects } = await payload.find({
    collection: 'projects',
    locale: lang as 'uk' | 'en', 
  })

  return (
    <main className="p-10 bg-black min-h-screen text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">
            {lang === 'uk' ? 'Мої проекти' : 'My Projects'}
          </h1>
          
          {/* Простий перемикач мов */}
          <div className="flex gap-4">
            <Link href="/?lang=uk" className={`px-3 py-1 rounded ${lang === 'uk' ? 'bg-blue-600' : 'bg-gray-800'}`}>
              UA
            </Link>
            <Link href="/?lang=en" className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-blue-600' : 'bg-gray-800'}`}>
              EN
            </Link>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {project.link && (
                <a href={project.link} className="text-blue-400 hover:text-blue-300">
                  {lang === 'uk' ? 'Дивитись проект →' : 'View project →'}
                </a>
              )}
            </div>
          ))}
        </div>
        
        {projects.length === 0 && (
          <p className="text-gray-500 text-center py-10">
            {lang === 'uk' ? 'Проектів поки немає.' : 'No projects yet.'}
          </p>
        )}
      </div>
    </main>
  )
}