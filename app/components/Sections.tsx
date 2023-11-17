import React from 'react'
import Link from 'next/link'
import { fetch } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, getThingAll } from '@inrupt/solid-client'

export default async function Sections() {
  const linkDataset = await getData()
  const links = getThingAll(linkDataset)

  // Build List of links, URL's, categories, about
  const linksList: any = []
  for (let i = 0; i < links.length; i++) {
    let newLink: { name: string; url: string; category: string } = {
      name: '',
      url: '',
      category: '',
    }
    newLink.name = (links as any)[i].predicates['http://schema.org/name']
      ?.literals['http://www.w3.org/2001/XMLSchema#string'][0]
    newLink.url = (links as any)[i].predicates['http://schema.org/URL']
      ?.namedNodes[0]
    newLink.category = (links as any)[i].predicates[
      'http://schema.org/category'
    ]?.literals['http://www.w3.org/2001/XMLSchema#string'][0]
    linksList.push(newLink)
  }

  let referenceList = []
  let explanationList = []
  let tutorialList = []
  let howToList = []

  for (let i = 0; i < linksList.length; i++) {
    switch (linksList[i].category) {
      case 'Reference':
        referenceList.push(linksList[i])
        break
      case 'Explanation':
        explanationList.push(linksList[i])
        break
      case 'Tutorial':
        tutorialList.push(linksList[i])
        break
      case 'How-to':
        howToList.push(linksList[i])
        break
      default:
        console.log(`No category found`)
    }
  }

  return (
    <div className="flex">
      <div className="basis-3/4">
        <div className="mb-10" id="tutorials">
          <div className="max-w-max mb-2">
            <div className="bg-primary-800 p-3">
              <span className="text-3xl text-primary-50">Tutorials</span>
            </div>
          </div>
          {tutorialList.length &&
            tutorialList.map((resource) => (
              <div className="pl-3 font-bold mt-2" key={resource.name}>
                <Link
                  className="bg-accent1-400 p-1 hover:text-white hover:bg-accent1-700"
                  href={resource.url || ''}
                >
                  {resource.name}
                </Link>
              </div>
            ))}
        </div>

        <div className="mb-10" id="how-to">
          <div className="max-w-max mb-2">
            <div className="bg-primary-800 p-3">
              <span className="text-3xl text-primary-50">
                How-to Guides and Examples
              </span>
            </div>
          </div>
          {howToList.length &&
            howToList.map((resource) => (
              <div className="pl-3 font-bold mt-2" key={resource.name}>
                <Link
                  className="bg-accent1-400 p-1 hover:text-white hover:bg-accent1-700"
                  href={resource.url || ''}
                >
                  {resource.name}
                </Link>
              </div>
            ))}
        </div>

        <div className="mb-10" id="explanation">
          <div className="max-w-max mb-2">
            <div className="bg-primary-800 p-3">
              <span className="text-3xl text-primary-50">
                Explanations and Walk-Throughs
              </span>
            </div>
          </div>
          {explanationList.length &&
            explanationList.map((resource) => (
              <div className="pl-3 font-bold mt-2" key={resource.name}>
                <Link
                  className="bg-accent1-400 p-1 hover:text-white hover:bg-accent1-700"
                  href={resource.url || ''}
                >
                  {resource.name}
                </Link>
              </div>
            ))}
        </div>

        <div className="mb-10" id="reference">
          <div className="max-w-max mb-2">
            <div className="bg-primary-800 p-3">
              <span className="text-3xl text-primary-50">
                Protocols, Specifications and other Reference Materials
              </span>
            </div>
          </div>
          {referenceList.length &&
            referenceList.map((resource) => (
              <div className="pl-3 font-bold mt-2" key={resource.name}>
                <Link
                  className="bg-accent1-400 p-1 hover:text-white hover:bg-accent1-700"
                  href={resource.url || ''}
                >
                  {resource.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="fixed top-52 right-1/4 text-xl">
        <p className="text-2xl pl-1 text-primary-800 bg-primary-300">
          Sections
        </p>
        <div className="ml-3 mt-1 px-1 text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700">
          <a href="#tutorials">Tutorials</a>
        </div>
        <div className="ml-3 mt-1 px-1 text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700">
          <a href="#how-to">How-To Guides</a>
        </div>
        <div className="ml-3 mt-1 px-1 text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700">
          <a href="#explanation">Explanation</a>
        </div>
        <div className="ml-3 mt-1 px-1 text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700">
          <a href="#reference">Reference</a>
        </div>
      </div>
    </div>
  )
}

async function getData() {
  // getStaticProps is now deprecated, since all Nextjs 13 components are now server components by default,
  // so the pod data is apparently retrieved at build time and cached on the server--aka no wait time for users
  // even if the pod is down, the server will apparently use cached values, so the site is never slowed due to pod responses
  // one question: does it only make a request at build time, or also at run time, and then update its response if there is new data
  const myDataset = await getSolidDataset(
    'https://onboarding.solidcommunity.net/public/Links',
    { fetch }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return myDataset
}
