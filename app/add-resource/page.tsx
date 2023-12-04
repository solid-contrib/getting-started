'use client'

import { useEffect, useState } from 'react'
import {
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from '@inrupt/solid-client-authn-browser'
import Link from 'next/link'

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [webID, setWebID] = useState('')
  const session = getDefaultSession()
  console.log('webID', webID)

  useEffect(() => {
    console.log('about to complete login')
    completeLogin()
    console.log('session.info.isLoggedIn', session.info.isLoggedIn)
    if (session.info.isLoggedIn) {
      setWebID(session.info.webId || '')
      setLoggedIn(true)
    }
  }, [session])

  async function startLogin() {
    // Start the Login Process if not already logged in.
    if (!getDefaultSession().info.isLoggedIn) {
      await login({
        oidcIssuer: 'https://onboarding.solidcommunity.net',
        redirectUrl: 'http://localhost:3000/add-resource',
        clientName: 'Solid Onboarding',
      })
    }
  }

  async function completeLogin() {
    await handleIncomingRedirect()
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
      {!loggedIn && (
        <>
          <Link
            href="https://solidcommunity.net/"
            className="ml-10 mt-5 mb-5 p-2 w-max block border-4 border-primary-600 rounded text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700"
          >
            SolidCommunity.net
          </Link>
          <button
            onClick={() => startLogin()}
            className="ml-10 p-2 w-max block border-4 border-primary-600 rounded text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700"
          >
            Login with Solid Identity Provider
          </button>
        </>
      )}
      {loggedIn && (
        <>
          <p>You are logged in with WebID: {webID}</p>
          <p>Form coming soon...please check back.</p>
        </>
      )}
    </>
  )
}
