"use client";

import { ClientSideSuspense, RoomProvider, useSyncStatus } from "@liveblocks/react";
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import ActiveCollaborators from "./ActiveCollaborators";
import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import editingImage from "../public/assets/icons/edit.svg"

const CollaborativeRoom = ({ roomId , roomMetadata} : CollaborativeRoomProps) => {
  const currentUserType = "editor"

  const [documentTitle , setDocumentTitle] = useState(roomMetadata.title);   
  const [editing , setEditing] = useState(false); 
  const [loading , setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null); 
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => { 

  } 

  

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden">
          <Header>
            <div ref={containerRef} className="flex w-1/2 items-center justify-between gap-2">

                {editing && !loading ? (
                  <Input
                    type="text"
                    value={documentTitle}
                    ref={inputRef}
                    placeholder="Enter title"
                    onChange={(e) => setDocumentTitle(e.target.value)}
                    onKeyDown={updateTitleHandler}
                    disabled={!editing}
                    className="line-clamp-1 border-dark-400 text-base border-none font-semibold leading-[24px] sm:pl-0 sm:text-xl"
               />)
                : ( <> <p className="line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl">
                {documentTitle}
              </p> </>)}

              {currentUserType === 'editor' && !editing && (
                <Image
                  src={editingImage}
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => setEditing(true)}
                  className=""
                />
              )}

              {currentUserType !== 'editor' && !editing && (
                <p className="rounded-md bg-dark-400/50 px-2 py-0.5 text-xs text-blue-100/50">
                    View only
                </p>
              )}

              {loading && <p className="test-sm text-gray-400">saving...</p>}
          
              <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                  <ActiveCollaborators />
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
              </div>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
