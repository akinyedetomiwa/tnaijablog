import React from 'react'
import { serializeLexical } from '@/utils/serialize'
export default function RichTextBlockServer({ content }: { content: any }) {
  return (
    <div>
      <div id="thisspecialrichtext" className="richText max-w-5xl mx-auto">
        {serializeLexical({ nodes: content.root.children })}
      </div>
    </div>
  )
}
// why its any its because its a richjson object so it cant be a string
//NB this is where most of my problems come from
