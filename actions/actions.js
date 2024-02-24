"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

const prisma = new PrismaClient();

export const addWebsite = async (formData) => {
  const name = formData.get("name");
  const webURL = formData.get("webURL");
  const category = formData.get("category");
  const pageType = formData.get("pageType");
  const shortDescription = formData.get("shortDescription");
  const longDescription = formData.get("longDescription");
  const logoImageURL = formData.get("logoImageURL");
  const desktopSsURL = formData.get("desktopSsURL");
  const mobileSsURL = formData.get("mobileSsURL");
  const desktopFpURL = formData.get("desktopFpURL");
  const mobileFpURL = formData.get("mobileFpURL");
  const date = formData.get("date");

  const new_website = await prisma.website.create({
    data: {
      name: name,
      webURL: webURL,
      category: category,
      pageType: pageType,
      shortDescription: shortDescription ? shortDescription : null,
      longDescription: longDescription ? longDescription : null,
      logoImageURL: logoImageURL ? logoImageURL : null,
      desktopSsURL: desktopSsURL ? desktopSsURL  : null,
      mobileSsURL: mobileSsURL  ? mobileSsURL : null,
      desktopFpURL: desktopFpURL  ? desktopFpURL : null,
      mobileFpURL: mobileFpURL  ? mobileFpURL : null,
      date: date,
    },
  });

    revalidatePath("/admin/dashboard");
    redirect('/admin/dashboard')
};
