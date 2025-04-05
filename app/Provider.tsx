"use client";

import React, { ReactNode } from 'react'
import { 
    LiveblocksProvider , 
    ClientSideSuspense
} from "@liveblocks/react/suspense"
import Loader from '@/components/Loader';
import { getClerkUser } from '@/lib/actions/user.actions';


const Provider = ({ children } :{children: ReactNode}) => {
  
    return (
        <LiveblocksProvider 
          authEndpoint="/api/liveblocks-auth"
          resolveUsers={async ({ userIds }) => { 
            const user = await getClerkUser({userIds});

            return user
          }}
        >
          <ClientSideSuspense fallback={<div><Loader /></div>}>
            {children}
          </ClientSideSuspense>
      </LiveblocksProvider>
  )
}

export default Provider;