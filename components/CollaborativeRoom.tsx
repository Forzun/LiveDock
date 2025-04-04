"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl">
                Share
              </p>
            </div>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
