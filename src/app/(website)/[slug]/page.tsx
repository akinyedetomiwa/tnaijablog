import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import type { Page as PageType } from '../../../payload-types'
import { RenderBlocks } from '@/utils/RenderBlocks'

import { notFound } from 'next/navigation'
// its a helper function that helps us query the database using the slug via the local api
// its is also a cached function too
//const parsedSlug = decodeURIComponent(slug) this line helps us to decode our slug that we get from the params below
//
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})
// this a replacement for get static paths from the pages router. it fetches all the pages within the limit ofa thousand it will return thee lug(for the index slug it will be diffrent)
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'index'
    })
    .map(({ slug }) => slug)
}
//without giving it any slug it fetches the default index page
export default async function Page({ params: { slug = 'index' } }) {
  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  return (
    //NB to self you can style the issue with the richtext and co here
    <div className="pt-16 pb-24">
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}
