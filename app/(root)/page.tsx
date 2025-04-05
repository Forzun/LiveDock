import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from "next/image"
import React from 'react'
import documentImage from "../../public/assets/icons/doc.svg"
import AddDocumentBtn from '@/components/AddDocumentBtn'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const page = async() => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect("/sign-in");

  const documents = [];

  return (
   <main className='relative flex min-h-screen flex-col items-center gap-5 sm:gap-10'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
           Notification
               <UserButton />
            <SignedIn>
            </SignedIn>
        </div>
      </Header>

        {documents.length > 0 ? (
          <div>

          </div>
        ): (
          <div className='flex w-full max-w-[730px] flex-col items-center justify-center gap-5 rounded-lg bg-slate-900 px-10 py-8'>
              <Image 
                src={documentImage} 
                alt="document"
                width={40}
                height={40}
                className='mx-auto'
              />
              <AddDocumentBtn  
                userId={clerkUser.id}
                email={clerkUser.emailAddresses[0].emailAddress}
              />
          </div>
        )}
   </main>
  )
}

export default page
