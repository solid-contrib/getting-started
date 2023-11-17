import Sections from './components/Sections'

export default async function Home() {
  return (
    <main>
      <header className="fixed top-0 w-full">
        <div className="bg-primary-800 shadow-lg border-dashed border-2 border-primary-100 border-x-transparent border-t-transparent">
          <div className="flex text-primary-300">
            <span className="flex pl-10 font-extrabold text-8xl tracking-tighter items-end">
              Solid
            </span>
            <span className="flex text-8xl tracking-tight font-extralight items-end">
              DeveloperGroup
            </span>
          </div>
        </div>
        <div className="flex bg-primary-800 mb-10 pl-5 py-3">
          <div className="text-2xl text-primary-300 hover:text-shadow-neonGlow">
            Add a Resource
          </div>
          <div className="text-2xl text-primary-300 hover:text-shadow-neonGlow"></div>
        </div>
      </header>
      <div className="flex ml-10 gap-8 mt-48">
        <div className="basis-11/12">
          <Sections></Sections>
        </div>
      </div>
    </main>
  )
}
