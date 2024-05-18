import localFont from 'next/font/local'
import Link from 'next/link'

const font = localFont({
  src: './../public/fonts/coolvetica.otf',
})

export default function fof() {
  const headingClass = 'text-9xl lg:text-[12rem]'
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-32 md:mt-48">
        <p className={`text-yellow-700/50 italic ${font.className}`}>
          Someone is lost...
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 mb-12">
          <h1
            className={`${font.className} ${headingClass} text-yellow-600/20 `}>
            404
          </h1>
          <h1 className={`${font.className} ${headingClass} text-yellow-900 `}>
            404
          </h1>
          <h1
            className={`${font.className} ${headingClass} text-yellow-600/20 `}>
            404
          </h1>
        </div>
        <Link
          href="/"
          className="transition duration-200 flex justify-center items-center p-1 text-yellow-900 gap-1 border-b-2 border-yellow-900 hover:bg-yellow-200/20 focus:bg-yellow-300/20 focus:outline-0">
          go back
        </Link>
      </main>
    </>
  )
}
