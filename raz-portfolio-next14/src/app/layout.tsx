"use client" // this is a client component
import './globals.css'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'


// export const metadata = {
//   title: 'Rana Ali Zeeshan',
//   description: 'Nextjs 13, Tailwind css, TypeScript',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
