import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
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
      required: true, //navigation has to be required or else you will get an error on the server
      //the navigation should have at least one item thats why im spwcifying the max and minimum
    },
    {
      name: 'copyrightNotice',
      label: 'Copyright Notice',
      type: 'text',
      required: true,
    },
  ],
}
