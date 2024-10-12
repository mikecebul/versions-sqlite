import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  versions: {
    drafts: { autosave: true },
  },
}
