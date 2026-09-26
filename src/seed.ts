import "dotenv/config";
import connectDB from "./config/db.js";
import Template from "./models/Template.js";

const templates = [
  {
    title: "বিজয় দিবস - ক্লাসিক",
    occasionType: "বিজয় দিবস",
    thumbnailUrl: "https://placehold.co/300x400.png",
    layoutConfig: { photoSlots: 3, style: "classic" },
    isActive: true,
  },
  {
    title: "শোক ও স্মরণ",
    occasionType: "শোক/স্মরণ",
    thumbnailUrl: "https://placehold.co/300x400.png",
    layoutConfig: { photoSlots: 1, style: "memorial" },
    isActive: true,
  },
  {
    title: "নির্বাচনী প্রচার",
    occasionType: "নির্বাচনী প্রচার",
    thumbnailUrl: "https://placehold.co/300x400.png",
    layoutConfig: { photoSlots: 2, style: "campaign" },
    isActive: true,
  },
];

const seedTemplates = async () => {
  await connectDB();

  await Template.deleteMany({});
  await Template.insertMany(templates);

  console.log("Templates seeded successfully");
  process.exit(0);
};

seedTemplates();
