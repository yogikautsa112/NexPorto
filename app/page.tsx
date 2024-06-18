import { Antic_Didone } from "next/font/google"

const AnticDidone = Antic_Didone({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-antic-didone"
})

export default function Home() {
  return (
    <>
    <div className="w-full h-full bg-[#f8f9fa]" id="container">
      <div className={AnticDidone.className}>
        <div className="text-container text-[#344a40] flex justify-center items-center min-h-screen">
          <div className="text-center">
            <p className="text-2xl">GOY</p>
            <h1 className="text-7xl">FullStack Dev</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}