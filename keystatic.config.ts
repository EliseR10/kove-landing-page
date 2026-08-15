// This define both the storage type and single content collection
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: "EliseR10/kove-landing-page", // define the GitHub repository where the content should be stored
    branchPrefix: 'my-prefix/testimonials', // optional, defaults to 'keystatic/'
  },
  collections: {
    testimonials: collection({
      label: 'Testimonials',
      path: 'content/testimonials/*', //define where the content for this collection should be stored
      entryLayout: 'content', //define how the CMS should display the fields for each entry in this collection
      slugField: 'name', //define what field in your collection schema should be used as the slug for each item
      schema: { // Define the fields that each entry in the collection should have
        name: fields.slug({ 
          name: { 
            label: 'Name',
            validation: { isRequired: true }, 
          } 
        }),
        role: fields.slug({ 
          name: { 
            label: 'Role',
            validation: { isRequired: true }, 
          } 
        }),
        quote: fields.text({ 
          label: 'Testimonial content', 
          multiline: true
        }),
      },
    }),
  },
});