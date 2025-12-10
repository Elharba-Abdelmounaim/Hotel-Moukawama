import Link from 'next/link'
import Image from "next/image";



export default function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#0b61a4a6,rgba(11,97,164,0.2))] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Hôtel Moukawama</h1>
          <p className="mt-3 text-lg opacity-90">L'élégance du désert, le confort de la mer</p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/booking" className="px-5 py-3 bg-sand text-primary font-semibold rounded shadow">Réserver maintenant</Link>
            <a href="#rooms" className="px-4 py-2 border border-white/30 rounded">Voir les chambres</a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm">
            <div className="bg-white/10 p-3 rounded">
              <strong>Check-in:</strong> 15:00
            </div>
            <div className="bg-white/10 p-3 rounded">
              <strong>Check-out:</strong> 12:00
            </div>
            <div className="bg-white/10 p-3 rounded">
              ★ 4.3 (123 avis)
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 rounded overflow-hidden shadow-lg">
          <img src="/images/Photo_de_lhotel.jpg" alt="Hôtel Moukawama - chambre" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  )
}