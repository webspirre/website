/// db.ts
import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

interface ProjectData {
  id: number;
  name: string;
  category: string;
  mobileImageUrlss: string;
  imageUrl: string;
  pageType: string;
  deviceType: string;
  logoUrl: string;
  description: string;
  mobileImageUrl: string;
  deskstopImageUrl: string;
  longDescription: string;
  views: string;
  lastUpdated: string;
}

const filterOptions = [
  "Landing Page",
  "Pricing Page",
  "About Page",
  "Login Page",
  "Sign Up Page",
  "404 Page",
];

const deviceFilters = ["Desktop", "Mobile"];

const categories = [
  "Software & SaaS",
  "AI",
  "Fintech",
  "Agency & Corporate",
  "E-Commerce",
  "Crypto & Web3",
  "Travel & Hospitality",
];

export const db = factory({
  project: {
    id: primaryKey(faker.number.int),
    name: () => faker.commerce.productName(),
    category: () => faker.helpers.arrayElement(categories),
    mobileImageUrlss: () => faker.image.imageUrl(),
    imageUrl: () => faker.image.imageUrl(),
    pageType: () => faker.helpers.arrayElement(filterOptions),
    deviceType: () => faker.helpers.arrayElement(deviceFilters),
    logoUrl: () => faker.image.imageUrl(),
    description: () => faker.lorem.sentence(),
    mobileImageUrl: () => faker.image.imageUrl(),
    deskstopImageUrl: () => faker.image.imageUrl(),
    longDescription: () => faker.lorem.paragraph(),
    views: () => faker.number.int({ min: 1000, max: 50000 }).toString(),
    lastUpdated: () => faker.date.recent().toDateString(),
  },
});

export const getProjectsByCategory = (category: string) =>
  db.project.findMany({
    where: {
      category: { equals: category },
    },
  });

export const getProjectsByPageType = (pageType: string) =>
  db.project.findMany({
    where: {
      pageType: { equals: pageType },
    },
  });

export const getProjectsByDeviceType = (deviceType: string) =>
  db.project.findMany({
    where: {
      deviceType: { equals: deviceType },
    },
  });

export const getFilteredProjects = (
  category: string,
  pageType: string,
  deviceType: string
) =>
  db.project.findMany({
    where: {
      category: { equals: category },
      pageType: { equals: pageType },
      deviceType: { equals: deviceType },
    },
  });
