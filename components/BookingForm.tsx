import { useState } from 'react'
import { Calendar, Users, Home, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'

export default function BookingForm() {
  const [form, setForm] = useState({
    arrival: '',
    departure: '',
    guests: '1',
    room: 'Single',
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Envoi en cours...')
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      
      const json = await res.json()
      
      if (res.ok) {
        setStatus('success')
        // Reset form on success
        setForm({
          arrival: '',
          departure: '',
          guests: '1',
          room: 'Single',
          name: '',
          email: '',
          phone: '',
          notes: ''
        })
        
        // Scroll to success message
        setTimeout(() => {
          const element = document.getElementById('success-message')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        setStatus('error:' + (json.message || res.statusText))
      }
    } catch (err) {
      setStatus('error:Erreur réseau, veuillez réessayer')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate number of nights
  const calculateNights = () => {
    if (form.arrival && form.departure) {
      const arrival = new Date(form.arrival)
      const departure = new Date(form.departure)
      const diff = departure.getTime() - arrival.getTime()
      return Math.ceil(diff / (1000 * 3600 * 24))
    }
    return 0
  }

  // Calculate estimated price
  const calculatePrice = () => {
    const nights = calculateNights()
    const roomPrices = {
      'Single': 45,
      'Double': 70,
      'Family': 110
    }
    return nights * roomPrices[form.room as keyof typeof roomPrices] || 0
  }

  return (
    <>
      {/* Success Message */}
      {status === 'success' && (
        <div id="success-message" className="mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-900 text-lg">✅ Réservation Envoyée !</h3>
                <p className="text-green-700">توصلنا بطلب الحجز، غادي يوصلك الرد فـ أقل من 12 ساعة</p>
              </div>
            </div>
            <p className="text-sm text-green-600">
              Nous vous avons envoyé un email de confirmation. Notre équipe vous contactera dans les plus brefs délais pour finaliser votre réservation.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status?.startsWith('error:') && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700 font-medium">❌ {status.replace('error:', '')}</p>
        </div>
      )}

      <form onSubmit={submit} className="space-y-6">
        {/* Dates Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Dates de Séjour
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date d'Arrivée *
              </label>
              <div className="relative">
                <input
                  required
                  name="arrival"
                  value={form.arrival}
                  onChange={handleChange}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date de Départ *
              </label>
              <div className="relative">
                <input
                  required
                  name="departure"
                  value={form.departure}
                  onChange={handleChange}
                  type="date"
                  min={form.arrival || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {calculateNights() > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              <span>{calculateNights()} nuit{calculateNights() > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Room & Guests */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Nombre d'Invités
            </label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} personne{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Type de Chambre
            </label>
            <select
              name="room"
              value={form.room}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="Single">Chambre Single - €45/nuit</option>
              <option value="Double">Chambre Double - €70/nuit</option>
              <option value="Family">Suite Familiale - €110/nuit</option>
            </select>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Informations Personnelles</h3>
          
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom Complet *
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Prénom et Nom"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Adresse Email *
                </label>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="exemple@email.com"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone *
                </label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+212 6 XX XX XX XX"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Demandes Spéciales
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            rows={4}
            placeholder="Demandes alimentaires, préférences de lit, heure d'arrivée estimée, etc."
          />
          <p className="text-xs text-gray-500 mt-2">
            Ces informations nous aideront à mieux préparer votre séjour.
          </p>
        </div>

        {/* Price Summary */}
        {calculatePrice() > 0 && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Estimation du prix</p>
                <p className="text-2xl font-bold text-primary">
                  €{calculatePrice()}
                </p>
                <p className="text-sm text-gray-500">
                  {calculateNights()} nuit{calculateNights() > 1 ? 's' : ''} × €{form.room === 'Single' ? 45 : form.room === 'Double' ? 70 : 110}/nuit
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Taxes et frais inclus</p>
                <p className="text-sm text-green-600">✓ Annulation gratuite</p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Section */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Meilleur prix garanti
              </p>
              <p className="mt-1 text-xs">
                Aucun frais supplémentaire • Paiement sécurisé
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
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
                'Confirmer la Réservation'
              )}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            En cliquant sur "Confirmer la Réservation", vous acceptez nos 
            <a href="/terms" className="text-primary hover:underline mx-1">conditions générales</a>
            et notre
            <a href="/privacy" className="text-primary hover:underline mx-1">politique de confidentialité</a>.
          </p>
        </div>
      </form>
    </>
  )
}