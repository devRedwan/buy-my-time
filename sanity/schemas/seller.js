import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seller',
  title: 'Seller',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'sellerRating',
      title: 'Seller Rating',
      type: 'number',
    }),
    defineField({
      name: 'sellerImageURL',
      title: 'Seller Image',
      type: 'string',
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: {
        type: 'service',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageURL',
      rating: 'sellerRating',
    },
  },
})
