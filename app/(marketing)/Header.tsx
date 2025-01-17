import { Button } from "@/components/ui/button"
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    ClerkLoading,
    ClerkLoaded
  } from '@clerk/nextjs'

import { Loader } from "lucide-react"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="mascot" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>

                <ClerkLoading>
                    <div className="flex items-center justify-center h-full">
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </div>
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                             <Button size="lg" variant="ghost">LogIn</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}
