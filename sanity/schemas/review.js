import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Service Review',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceRating',
      title: 'Service Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: 'serviceReview',
      title: 'Service Review',
      type: 'string',
      validation: (Rule) =>
        Rule.error('Review field can not be empty')
          .min(10)
          .error('Review must have a minimum of 10 characters'),
    }),
  ],
})
