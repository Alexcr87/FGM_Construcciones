import { v2 } from 'cloudinary';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });
console.log('Cloudinary ENV:', {
  name: process.env.CLOUDINARY_NAME,
  key: process.env.CLOUDINARY_KEY,
  pass: process.env.CLOUDINARY_PASS ? '****' : null,
});
export const CloudinaryConfig = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    console.log(process.env.CLOUDINARY_KEY, 'key');
    return v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_PASS,
    });
  },
};
