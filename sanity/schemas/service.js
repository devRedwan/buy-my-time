import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Service Image URL',
      name: 'serviceImageUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visits',
      title: 'Visits',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'seller',
      title: 'Seller',
      type: 'reference',
      to: {
        type: 'seller',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      seller: 'seller.name',
      media: 'image',
    },
  },
})
