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
        <div className="mb-10">
          <div className="max-w-max">
            <div className="bg-primary-700 p-2">
              <span id="tutorials" className="text-2xl text-primary-50">
                Tutorials
              </span>
              <p className="text-primary-50 text-md">
                Learning-oriented, useful when studying or planning a project
              </p>
            </div>
          </div>
          {tutorialList.length &&
            tutorialList.map((resource) => (
              <div key={resource.name}>
                <p className="font-bold mt-2">{resource.name}</p>
                <Link href={resource.url}>{resource.url}</Link>
              </div>
            ))}
        </div>

        <div className="mb-10">
          <div className="max-w-max">
            <div className="bg-primary-700 p-2">
              <span id="how-to" className="text-2xl text-primary-50">
                How-to Guides and Examples
              </span>
              <p className="text-primary-50 text-md">
                Problem-oriented, useful when working, specific and narrow in
                focus
              </p>
            </div>
          </div>
          {howToList.length &&
            howToList.map((resource) => (
              <div key={resource.name}>
                <p className="font-bold mt-2">{resource.name}</p>
                <Link href={resource.url}>{resource.url}</Link>
              </div>
            ))}
        </div>

        <div className="mb-10">
          <div className="max-w-max">
            <div className="bg-primary-700 p-2">
              <span id="explanation" className="text-2xl text-primary-50">
                Explanations and Walk-Throughs
              </span>
              <p className="text-primary-50 text-md">
                Understanding-oriented, useful when learning, tying concepts
                together, doing deep dives
              </p>
            </div>
          </div>
          {explanationList.length &&
            explanationList.map((resource) => (
              <div key={resource.name}>
                <p className="font-bold mt-2">{resource.name}</p>
                <Link href={resource.url}>{resource.url}</Link>
              </div>
            ))}
        </div>

        <div className="mb-10">
          <div className="max-w-max">
            <div className="bg-primary-700 p-2">
              <span id="reference" className="text-2xl text-primary-50">
                Protocols, Specifications and other Reference Information
              </span>
              <p className="text-primary-50 text-md">
                Information-oriented, very practical, detailed official sources
              </p>
            </div>
          </div>
          {referenceList.length &&
            referenceList.map((resource) => (
              <div key={resource.name}>
                <p className="font-bold mt-2">{resource.name}</p>
                <Link href={resource.url}>{resource.url}</Link>
              </div>
            ))}
        </div>
      </div>

      <div className="basis-1/4">
        <p className="text-lg">Sections</p>
        <div className="pl-3">
          <a href="#tutorials">Tutorials</a>
        </div>
        <div className="pl-3">
          <a href="#how-to">How-To Guides</a>
        </div>
        <div className="pl-3">
          <a href="#explanation">Explanation</a>
        </div>
        <div className="pl-3">
          <a href="#reference">Reference</a>
        </div>
      </div>
    </div>
  )
}

async function getData() {
  console.log('getting data from pod')
  const myDataset = await getSolidDataset(
    'https://onboarding.solidcommunity.net/public/Links',
    { fetch }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return myDataset
}
