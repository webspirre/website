interface UserData {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  invited_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    phone_verified: boolean;
    picture: string;
    provider_id: string;
    sub: string;
  };
  identities: {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: {
      avatar_url: string;
      email: string;
      email_verified: boolean;
      full_name: string;
      iss: string;
      name: string;
      phone_verified: boolean;
      picture: string;
      provider_id: string;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
  }[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

interface UserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  sub: string;
}

type User = {
  access_token?: string;
  user: UserData;
  token_type?: string;
  expires_in?: number;
  expires_at?: number;
  refresh_token?: string;
};

interface FormData {
  name: string;
  webURL: string;
  category: string;
  pageType: string;
  shortDescription: string;
  longDescription: string;
  logoImageURL: string;
  desktopSsURL: string;
  mobileSsURL: string;
  desktopFpURL: string;
  mobileFpURL: string;
  date: string; // Assuming date is a string here
}

interface CloudinaryAsset {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[]; // Assuming tags are an array of strings
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  opengraph?: OpenGraphData;
  twitter?: TwitterCardData;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string; // URL to the image
}

export interface TwitterCardData {
  card: string; // e.g., 'summary' or 'summary_large_image'
  site: string; // Twitter username of the site
}

export type { User, FormData, CloudinaryAsset, UserMetadata };
