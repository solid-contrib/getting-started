import { fetch } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, getThingAll } from '@inrupt/solid-client'
import Link from 'next/link'
import TypeCards from './components/TypeCards'

export default async function Home() {
  const linkDataset = await getData()
  const links = getThingAll(linkDataset)

  // Build List of links and URL's
  const linksList: any = []
  for (let i = 0; i < links.length; i++) {
    let newLink: { name: string; url: string } = { name: '', url: '' }
    newLink.name = (links as any)[i].predicates['http://schema.org/name']
      ?.literals['http://www.w3.org/2001/XMLSchema#string'][0]
    newLink.url = (links as any)[i].predicates['http://schema.org/URL']
      ?.namedNodes[0]
    linksList.push(newLink)
  }

  return (
    <main>
      <header className="bg-primary-800 shadow-lg my-7 mb-10">
        <div className="flex text-primary-300">
          <span className="flex pl-10 font-extrabold text-8xl tracking-tighter items-end">
            Solid
          </span>
          <span className="flex text-8xl tracking-tight font-extralight items-end">
            DeveloperGroup
          </span>
        </div>
      </header>
      <div className="flex ml-10 gap-8">
        <div className="basis-11/12">
          <TypeCards></TypeCards>
          <div className="hidden">
            <h2 className="text-2xl">Documentation and Other Resources</h2>
            {linksList.length ? (
              linksList.map((resource: { name: string; url: string }) => (
                <div key={resource.url}>
                  <p className="mt-10">{resource.name}</p>
                  <Link href={resource.url}>{resource.url}</Link>
                </div>
              ))
            ) : (
              <p className="mt-10">Loading...</p>
            )}
          </div>
        </div>
        <div className="basis-1/12 text-2xl mr-4">Add a Resource</div>
      </div>
    </main>
  )
}

async function getData() {
  const myDataset = await getSolidDataset(
    'https://onboarding.solidcommunity.net/public/Links',
    { fetch }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return myDataset
}
