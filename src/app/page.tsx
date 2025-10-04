import NavbarDock from '@/components/navbar-dock'

export default function Home() {
  return (
    <main className="p-4">
      <div className="bg-brand text-background p-2   rounded-2xl">
        <div className="relative w-full flex justify-between items-center">
          <NavbarDock />
          <img src="/pe3epwithyou.svg" alt="pe3epwithyou" className="h-8" />
        </div>
      </div>
    </main>
  )
}
