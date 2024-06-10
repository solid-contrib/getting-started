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
    <div className="mt-10 ml-10">
      <p>Form coming soon...please check back.</p>
    </div>
  );
}
