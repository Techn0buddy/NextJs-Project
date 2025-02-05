import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wonders from './wonders'

export default function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-200">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photos-feed/${id}`}>
            <Image
              alt={name}
              src={src}
                    className="w-full object-cover aspect-square"
                    // style={{width:"10%", height:"10%", margin:"1rem"}}
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
