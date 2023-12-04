import { getDefaultSession } from '@inrupt/solid-client-authn-browser'
import Link from 'next/link'

export default async function Page() {
  const session = getDefaultSession()
  console.log('session: ', session)
  if (session.info.isLoggedIn) {
    const webId = session.info.webId
  }

  return (
    <>
      <p className="ml-10 text-lg font-semibold">
        In order to add a new resource, you need to have a Solid WebID, and be
        logged in.
      </p>
      <p className="ml-10 text-lg font-semibold">
        To get a WebID, you should register for a Solid Pod. You can{' '}
        <Link
          href="https://solidproject.org/users/get-a-pod"
          className="border-b-2 border-b-primary-800  hover:text-white hover:bg-primary-700 hover:p-1"
        >
          find a Pod Provider here
        </Link>{' '}
        or you could use SolidCommunity.net, below.
      </p>
      <Link
        href="https://solidcommunity.net/"
        className="ml-10 mt-5 mb-5 p-2 w-max block border-4 border-primary-600 rounded text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700"
      >
        SolidCommunity.net
      </Link>
      <Link
        href=""
        className="ml-10 p-2 w-max block border-4 border-primary-600 rounded text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700"
      >
        Login with Solid Identity Provider
      </Link>
    </>
  )
}
