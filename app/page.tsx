import Sections from './components/Sections'

export default async function Home() {
  return (
    <main>
      <header className="bg-primary-800 shadow-lg mt-7 border-dashed border-2 border-primary-100 border-x-transparent border-t-transparent">
        <div className="flex text-primary-300">
          <span className="flex pl-10 font-extrabold text-8xl tracking-tighter items-end">
            Solid
          </span>
          <span className="flex text-8xl tracking-tight font-extralight items-end">
            DeveloperGroup
          </span>
        </div>
      </header>
      <div className="bg-primary-800 mb-10 pl-5 py-3">
        <div className="text-2xl text-primary-300 hover:text-shadow-neonGlow">
          Add a Resource
        </div>
      </div>
      <div className="flex ml-10 gap-8">
        <div className="basis-11/12">
          <Sections></Sections>
        </div>
      </div>
    </main>
  )
}
