import Sections from './components/sections'

export default async function Home() {
  return (
    <div className="flex ml-10 gap-8 mt-48">
      <div className="basis-11/12">
        <Sections></Sections>
      </div>
    </div>
  )
}
