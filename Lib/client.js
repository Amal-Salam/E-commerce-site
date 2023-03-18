import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 export const client =sanityClient({
    projectId:'a3bp9oao',
    dataset:'production',
    apiVersion:'2022-12-07',
    useCdn:true,
    token:'sk8Fh4fDRws2W1xZfJGvcgGcAhPT7Irg3yD39MvvPnTY13MazKcXA3HX4kaWN99bcTduO6G3FLdxUYfqzYDNSKWhyqRnWXBPZ4kyd9zX0DAeUeRcNtJFUSHdsumESIaAwhtI4har7UyTyvwOuG9kT0gucwiUsW92heGspkKhs4N9oV0tl2XK'
 });

 const builder = imageUrlBuilder(client);

 export const urlFor=(source)=>builder.image(source);