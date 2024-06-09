'use client';

import { useEffect, useState } from 'react';
import {
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from '@inrupt/solid-client-authn-browser';
import Link from 'next/link';

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [webID, setWebID] = useState('');
  const session = getDefaultSession();
  // TODO: persist session upon refresh (by default, refreshing the page logs out the user)
  // see https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/restore-session-browser-refresh/
  if (typeof window !== 'undefined') {
    handleIncomingRedirect({ restorePreviousSession: true }).then((info) => {
      console.log('info.isloggedin', info?.isLoggedIn);
      setWebID(info?.webId || '');
      if (info?.isLoggedIn) {
        setLoggedIn(true);
      }
    });
  }

  function startLogin() {
    if (!getDefaultSession().info.isLoggedIn) {
      login({
        oidcIssuer: 'https://onboarding.solidcommunity.net',
        redirectUrl: 'http://localhost:3000/add-resource',
        clientName: 'Solid Onboarding',
      });
    }
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
        or you could use{' '}
        <Link
          href="https://solidcommunity.net/"
          className="border-b-2 border-b-primary-800  hover:text-white hover:bg-primary-700 hover:p-1"
        >
          SolidCommunity.net
        </Link>
        .
      </p>
      {!loggedIn && (
        <button
          onClick={() => startLogin()}
          className="mt-10 ml-10 p-2 w-max block border-4 border-primary-600 rounded text-primary-800 bg-primary-300 hover:text-white hover:bg-primary-700"
        >
          Login with Solid Identity Provider
        </button>
      )}
      {loggedIn && (
        <div className="mt-10 ml-10">
          <p>You are logged in with WebID: {webID}</p>
          <p>Form coming soon...please check back.</p>
        </div>
      )}
    </>
  );
}
