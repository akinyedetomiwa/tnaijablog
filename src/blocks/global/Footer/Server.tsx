import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'

import Link from 'next/link'

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config })
  //im using the paload object to find the logo
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-md">
        <div className="text-white">{footer.copyrightNotice}</div>
        <div>
          {footer.nav.map((item, index) => {
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
