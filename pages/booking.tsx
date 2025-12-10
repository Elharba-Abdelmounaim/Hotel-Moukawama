import BookingForm from '../components/BookingForm'
import { CalendarDays, ShieldCheck, CreditCard, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Booking() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Annulation Gratuite",
      description: "Annulez gratuitement jusqu'à 48h avant l'arrivée"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Paiement Sécurisé",
      description: "Transactions cryptées et 100% sécurisées"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Support 24/7",
      description: "Assistance téléphonique disponible jour et nuit"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm font-medium">Réservez en toute simplicité</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Réservez Votre <span className="text-secondary">Séjour</span>
            </h1>
            <p className="text-xl text-gray-200">
              Entrez vos dates et informations pour réserver votre séjour de rêve à Dakhla
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Détails de Réservation</h2>
                    <p className="text-gray-600 mt-1">Remplissez le formulaire ci-dessous</p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Disponible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <BookingForm />
              </div>

              {/* Form Footer */}
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Vos informations sont sécurisées et protégées</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info & Benefits */}
          <div className="space-y-8">
            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Avantages de Réserver Directement</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h4>
                <ul className="space-y-3">
                  {[
                    "Meilleur prix garanti",
                    "Check-in anticipé possible",
                    "Service personnalisé",
                    "Conseils locaux exclusifs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Résumé des Tarifs</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Chambre Single</span>
                  <span className="font-bold">€45/nuit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Chambre Double</span>
                  <span className="font-bold">€70/nuit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Suite Familiale</span>
                  <span className="font-bold">€110/nuit</span>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Prix moyen</span>
                    <span>€75/nuit</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <p className="text-sm">
                  💡 <span className="font-semibold">Conseil :</span> Réservez en semaine pour profiter de nos offres spéciales.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'Aide ?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Appelez-nous</p>
                    <a href="tel:+212528930307" className="font-semibold text-gray-900 hover:text-primary">
                      +212 5289-30307
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3">
                    Questions fréquentes sur les réservations
                  </p>
                  <Link 
                    href="/faq" 
                    className="text-primary font-medium hover:text-primary-dark text-sm inline-flex items-center gap-1"
                  >
                    Consulter la FAQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-gray-900 mb-2">Politique d'Annulation</h4>
            <p className="text-sm text-gray-600">
              Annulation gratuite jusqu'à 48h avant l'arrivée. Après cette période, des frais peuvent s'appliquer.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-gray-900 mb-2">Moyens de Paiement</h4>
            <div className="flex gap-2 mt-3">
              {['Visa', 'MasterCard', 'PayPal', 'Espèces'].map((method) => (
                <span key={method} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-gray-900 mb-2">Documents Requis</h4>
            <p className="text-sm text-gray-600">
              Une pièce d'identité valide sera demandée à l'arrivée. Passeport requis pour les clients internationaux.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}