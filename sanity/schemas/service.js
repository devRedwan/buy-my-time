import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceImageURL',
      title: 'Service Image',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'string',
    }),
    defineField({
      name: 'seller',
      title: 'Seller',
      type: 'reference',
      to: {
        type: 'seller',
      },
    }),
    defineField({
      name: 'visits',
      title: 'Visits',
      type: 'number',
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
    }),

    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'reviews',
      title: 'review',
      type: 'reference',
      to: {
        type: 'review',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      seller: 'seller.name',
      media: 'serviceImageURL',
    },
  },
})
