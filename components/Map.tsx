// components/Map.tsx
export default function Map() {
  return (
    <div className="w-full h-64 md:h-96 rounded overflow-hidden shadow">
      <iframe
        title="Hôtel Moukawama location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3099612779843!2d-15.93234002383545!3d23.70062267870428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc224831eb00b971%3A0x8c6b0a23dbe68bb2!2sH%C3%B4tel%20Moukawama!5e0!3m2!1sfr!2s!4v1765376891350!5m2!1sfr!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
