import qs from "qs";

export function getStrapiURL(path = "") {
  const isProd = process.env.NODE_ENV === "production";
  const baseUrl = isProd 
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD 
    : process.env.NEXT_PUBLIC_STRAPI_API_URL_DEV;

  return `${baseUrl || "http://127.0.0.1:1337"}${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  
  const isProd = process.env.NODE_ENV === "production";
  const baseUrl = isProd 
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL_PROD 
    : process.env.NEXT_PUBLIC_STRAPI_API_URL_DEV;

  return `${baseUrl || "http://127.0.0.1:1337"}${url}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(`Status ${response.status}: Error fetching ${requestUrl}`);
      throw new Error(`An error occurred please try again`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}

// Typings for our Blog Data
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Strapi blocks structure
  coverImage: StrapiImage | null;
  createdAt: string;
  publishedAt: string;
}
