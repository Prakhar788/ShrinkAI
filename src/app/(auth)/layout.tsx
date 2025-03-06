"use client"; // Required for using Suspense in Next.js App Router

import { ReactNode, Suspense } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (

    <div className="flex h-screen w-screen items-center justify-center">
    <Suspense fallback={<div>Loading authentication...</div>}>
      {children}
    </Suspense>
    </div>

  );
}
