export default function Reviews() {
  const reviews = [
    { name: 'Amira', rating: 5, text: "Très bon séjour, équipe sympathique." },
    { name: 'Hassan', rating: 4, text: "Chambre confortable et emplacement idéal." },
    { name: 'Leila', rating: 4, text: "Petit-déjeuner délicieux." }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Avis des clients</h1>
      <p className="text-gray-600 mt-2">★ 4.3 (123 avis sur Google)</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <strong>{r.name}</strong>
              <span className="text-sm">{"★".repeat(r.rating)}</span>
            </div>
            <p className="mt-2 text-gray-600">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}