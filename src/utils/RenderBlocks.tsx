import CoverBlockServer from '@/blocks/cover/Server'
import ImageBlockServer from '@/blocks/image/Server'
import RichTextBlockServer from '@/blocks/richText/Server'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'
//: { [key: string]: React.ComponentType<any> }
//this is where we map slugs to the react component
const blockComponents = {
  cover: CoverBlockServer,
  image: ImageBlockServer,
  richText: RichTextBlockServer,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block id={blockName} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
//NB: it goes through the page layout for every block in the page layout if the block is in the block component it then assigns the block to the block component
// our cover block will receive the heading prop, title block, subtitle props
