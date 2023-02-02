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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Seller Image URL',
      name: 'sellerImageUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sellerRating',
      title: 'Seller Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      rating: 'sellerRating',
    },
  },
})
