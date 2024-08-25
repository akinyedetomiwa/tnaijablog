import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      minRows: 1,
      maxRows: 5,
      required: true,
    },
  ],
}
// had to create the header global config for the header as seen above
// had to add a logo and relate it to the media so i could import it
// the navigation indicating as an array with a labal and a link
