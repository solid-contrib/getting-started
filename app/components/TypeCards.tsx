import React from 'react'

export default async function TypeCards() {
  const types = [
    {
      type: 'Tutorials',
      description:
        'Learning-oriented, useful when studying or planning a project',
    },
    {
      type: 'How-To Guides and Examples',
      description:
        'Problem-oriented, useful when building, specific and narrow in focus',
    },
    {
      type: 'Non-Documentation Resources: Apps, Solid World Videos, etc.',
      description:
        'Very useful for seeing working examples, learning about the Solid ecosystem, and many other purposes',
    },
    {
      type: 'Explanations and Walk-Throughs',
      description:
        'Understanding-oriented, useful when learning, tying concepts together, doing deep dives',
    },
    {
      type: 'Protocols, Specifications and other Reference Information',
      description:
        'Information-oriented, very practical, detailed official sources',
    },
    {
      type: 'View All Resources',
      description: 'All documentation and non-documentation resources',
    },
  ]
  return (
    <div className="flex flex-row flex-wrap">
      {types.map((type) => (
        <div className="flex basis-1/3 mb-10" key={type.type}>
          <div className="w-4/5 h-40 border-solid border-1 rounded-md shadow-lg bg-white">
            <div className="h-16 bg-primary-700 rounded-t-md">
              <div className="text-lg text-primary-50 flex justify-center px-2 pt-1">
                {type.type}
              </div>
            </div>
            <p className="text-primary-900 text-md p-2">{type.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
