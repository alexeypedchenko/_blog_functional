export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: new Date().toISOString(),
    },
  ],
}

// {
//   name: 'tags',
//   title: 'Tags',
//   type: 'array',
//   validation: (Rule: any) => Rule.unique(),
//   of: [
//     {
//       type: 'reference',
//       to: {type: 'category'},
//     },
//   ],
// },
