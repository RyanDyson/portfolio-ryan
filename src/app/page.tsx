import localFont from 'next/font/local'

const against = localFont({src: './assets/fonts/against.otf'})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col