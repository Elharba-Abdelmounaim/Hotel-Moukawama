type Props = {
  title: string
  price: string
  size: string
  image: string
  features: string[]
}

export default function RoomCard({ title, price, size, image, features }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{size} • {price} / nuit</p>
        <ul className="mt-3 text-sm space-y-1">
          {features.map((f, i) => <li key={i}>• {f}</li>)}
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary font-semibold">{price}</span>
          <a href="/booking" className="px-3 py-1 bg-primary text-white rounded">Réserver</a>
        </div>
      </div>
    </article>
  )
}