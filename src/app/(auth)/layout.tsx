"use client"; // Required for using Suspense in Next.js App Router

import { ReactNode, Suspense } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-gray-100">
      <div className="p-6 rounded-lg shadow-md bg-white">
        <Suspense fallback={<div>Loading authentication...</div>}>
          {children}
        </Suspense>
      </div>
    </main>
  );
}
