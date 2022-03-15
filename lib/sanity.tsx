// client.js
import sanityClient from '@sanity/client'

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId:'zlkjqwev', 
  useCdn: process.env.NODE_ENV === "production"
}

export default sanityClient(options)