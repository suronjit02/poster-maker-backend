import { v2 as cloudinary } from "cloudinary";
import { resolve } from "node:dns";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);

export const uploadToCloudinary = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "poster-maker" },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Upload failed."));
        }
        resolve(result.secure_url);
      },
    );
    uploadStream.end(fileBuffer);
  });
};

export default cloudinary;
