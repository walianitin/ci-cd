"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
// This file is used to provide global state management and session handling for the application.
export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
} 