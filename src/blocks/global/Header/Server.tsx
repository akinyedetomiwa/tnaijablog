import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  //im using the paload object to find the logo
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-md">
        <div className="relative w-64 h-20">
          <Image
            alt={typeof header.logo === 'string' ? '' : header.logo.alt}
            src={typeof header.logo === 'string' ? '' : header.logo?.url || ''}
            height={70}
            width={70}
            className=" rounded-full object-contain"
          />
        </div>
        <div>
          {header.nav.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link || ''}
                className="text-white text-md mx-5 hover:text-gray-300 cursor-pointer transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
// export default async function HeaderServer() {
//   const payload = await getPayload({ config })
//   return <div>Header</div>
// }

// {
//   /**/
// }
