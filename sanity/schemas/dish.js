import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the Dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
  ],
})
