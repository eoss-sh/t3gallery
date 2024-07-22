import Link from "next/link";

const mockURLS = [
  'https://utfs.io/f/4dc21bdf-ba45-45aa-84cd-0248c118e243-9spvmh.jpg',
  'https://utfs.io/f/9bfa2184-5adc-41be-ab22-5adcab5c7a79-p8h8ty.jpg',
  'https://utfs.io/f/04ac1683-bf4a-4160-85c2-e087de172d60-werpag.jpg',
  'https://utfs.io/f/9a0ce4ee-aca1-43c7-8468-d50db924aa39-3l5889.jpg'
]

const mockImages = mockURLS.map((url, index) => (
  {
    id: index + 1,
    url
  }
))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-1/2 p-2">
              <Link href={`/image/${image.id}`}>
                  <img src={image.url} alt="image" className="w-full" />
              </Link>
            </div>
        ))
        }
      </div>
    </main>
  );
}
