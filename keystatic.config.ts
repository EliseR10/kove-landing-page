// This define both the storage type and single content collection
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    testimonials: collection({
      label: 'Testimonials',
      path: 'content/testimonials/*', //define where the content for this collection should be stored
      entryLayout: 'content', //define how the CMS should display the fields for each entry in this collection
      slugField: 'name', //define what field in your collection schema should be used as the slug for each item
      schema: { // Define the fields that each entry in the collection should have
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.slug({ name: { label: 'Role' } }),
        quote: fields.text({ label: 'Testimonial content', multiline: true}),
      },
    }),
  },
});