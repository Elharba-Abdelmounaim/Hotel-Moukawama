import Map from '../components/Map'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "401 AV. Imlili, Dakhla, Morocco",
      link: "https://maps.google.com/?q=401+AV.+Imlili,+Dakhla,+Morocco"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "+212 5289-30307",
      link: "tel:+212528930307"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@hotelmoukawama.com",
      link: "mailto:contact@hotelmoukawama.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: "Réception 24h/24, 7j/7"
    }
  ]

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      link: "https://wa.me/212528930307",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "https://instagram.com/hotelmoukawama",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      link: "https://facebook.com/hotelmoukawama",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm mb-6">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Nous Contacter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Restons en <span className="text-secondary">Contact</span>
            </h1>
            <p className="text-xl text-gray-200">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et demandes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form & Info */}
          <div className="space-y-8">
            {/* Success Message */}
            {isSubmitted && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">Message Envoyé !</h3>
                    <p className="text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Informations de <span className="text-primary">Contact</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors mt-1 block"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 mt-1">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous sur les réseaux</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors duration-300`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Envoyez-nous un <span className="text-primary">Message</span>
                  </h2>
                  <p className="text-gray-600 mt-1">Nous vous répondrons sous 24 heures</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+212 6 XX XX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="information">Demande d'information</option>
                      <option value="group">Réservation de groupe</option>
                      <option value="event">Organisation d'événement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    En envoyant ce message, vous acceptez notre 
                    <a href="/privacy" className="text-primary hover:underline mx-1">politique de confidentialité</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Map & FAQ */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  Notre <span className="text-primary">Emplacement</span>
                </h3>
                <p className="text-gray-600 mt-2">
                  Situé au cœur de Dakhla, facilement accessible depuis l'aéroport
                </p>
              </div>
              
              <div className="h-[400px]">
                <Map />
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Directions</h4>
                    <p className="text-sm text-gray-600">À 15 minutes de l'aéroport de Dakhla</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=401+AV.+Imlili,+Dakhla,+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Itinéraire Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Questions <span className="text-primary">Fréquentes</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Quel est le délai de réponse ?",
                    answer: "Nous nous engageons à répondre à tous les messages dans un délai de 24 heures ouvrables."
                  },
                  {
                    question: "Puis-je modifier ma réservation ?",
                    answer: "Oui, vous pouvez modifier votre réservation en nous contactant par téléphone ou email jusqu'à 48h avant votre arrivée."
                  },
                  {
                    question: "Acceptez-vous les réservations de groupe ?",
                    answer: "Absolument ! Nous offrons des tarifs spéciaux pour les groupes. Contactez-nous pour un devis personnalisé."
                  },
                  {
                    question: "Y a-t-il un service de navette ?",
                    answer: "Un service de navette depuis l'aéroport est disponible sur demande. Veuillez nous contacter à l'avance pour réserver."
                  }
                ].map((faq, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="/faq"
                  className="text-primary font-medium hover:text-primary-dark inline-flex items-center gap-2"
                >
                  Voir toutes les questions fréquentes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Contact Rapide</h3>
                <p className="text-gray-200 mb-6">
                  Besoin d'une réponse immédiate ? Appelez-nous directement
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+212528930307"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler +212 5289-30307
                  </a>
                  
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://wa.me/212528930307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    
                    <a
                      href="sms:+212528930307"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      <MessageSquare className="w-4 h-4" />
                      SMS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Horaires d'<span className="text-primary">Ouverture</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { day: "Lundi - Vendredi", hours: "00:00 - 00:00", note: "Réception 24h/24" },
              { day: "Samedi", hours: "00:00 - 00:00", note: "Réception 24h/24" },
              { day: "Dimanche", hours: "00:00 - 00:00", note: "Réception 24h/24" },
              { day: "Jours fériés", hours: "00:00 - 00:00", note: "Service complet" }
            ].map((schedule, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-50">
                <h4 className="font-semibold text-gray-900">{schedule.day}</h4>
                <p className="text-lg text-primary font-bold mt-2">{schedule.hours}</p>
                <p className="text-sm text-gray-600 mt-1">{schedule.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}