import { fetch } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, getThingAll } from '@inrupt/solid-client'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'

export default async function Home() {
  const linkDataset = await getData()
  const links = getThingAll(linkDataset)
  console.log('Links', links)
  // Build List of links and URL's
  const linksList: any = []
  for (let i = 0; i < links.length; i++) {
    let newLink: any = {}
    newLink.name = (links as any)[i].predicates['http://schema.org/name']?.literals['http://www.w3.org/2001/XMLSchema#string'][0]
    newLink.url = (links as any)[i].predicates['http://schema.org/URL']?.namedNodes[0]
    linksList.push(newLink)
    console.log(`Link URL ${i}`, (links as any)[i].predicates['http://schema.org/URL'].namedNodes[0] ?? 'end of list')
  }
  
  return (
    <main className="min-h-screen items-center pt-5">
      <header className='text-5xl text-cyan-800 bg-cyan-100 w-full h-28 font-bold flex items-center mb-10 shadow-lg pl-5'>Getting Started with Solid</header>
      <div className='flex ml-10 gap-8'>  
      <div className='basis-1/5'>
        <h2 className='mb-4 text-2xl'>Work Items</h2>
        <p className='mb-4'>
          Step One: Build a List of Links with Tags, store it somewhere,
          retrieve it at buildtime, and display it here
        </p>
        <p  className='mb-4'>Step Two: Make the List Filterable</p>
        <p  className='mb-4'>
          Step Three: Design this page as three sections: header, issues list,
          and docs links
        </p>
        <p  className='mb-4'>
          Step Four: Create a roadmap, starting with these items, and replace
          this section with the roadmap
        </p>
        <p  className='mb-4'>Step Five: Create issues for each of the above</p>
        <p  className='mb-4'>Step Six: Iterate</p>
      </div>
      <div>
        <h2 className='text-2xl'>Documentation and Other Resources</h2>
          {linksList.map((element: { name: string, url: string }) => (
            <>
              <p className='mt-10'>Name: {element.name}</p>
              <span>URL:{' '}
                <a href={element.url}>{element.url}</a>
              </span>
            </>
          ))}
      </div>
      </div>
    </main>
  );
}

async function getData() {
  const myDataset = await getSolidDataset(
    'https://onboarding.solidcommunity.net/public/Links', { fetch }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  return myDataset
}
