import Parser from "rss-parser";

type CustomFeed = { title: string; description: string };
type CustomItem = {
  "media:content"?: { $?: { url?: string } };
  "media:thumbnail"?: { $?: { url?: string } };
  enclosure?: { url?: string };
  "content:encoded"?: string;
};

const parser = new Parser<CustomFeed, CustomItem>({
  customFields: {
    item: ["media:content", "media:thumbnail", "enclosure", "content:encoded"],
  },
  timeout: 10000,
});

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  sourceUrl: string;
  sourceLogo: string;
  image?: string;
}

const FEEDS = [
  {
    url: "https://rss.kompas.com/breakingnews",
    source: "Kompas",
    sourceUrl: "https://kompas.com",
    sourceLogo: "K",
    color: "#CC0000",
  },
  {
    url: "https://finance.detik.com/rss",
    source: "Detik Finance",
    sourceUrl: "https://finance.detik.com",
    sourceLogo: "D",
    color: "#E4181C",
  },
  {
    url: "https://www.kontan.co.id/rss/news",
    source: "Kontan",
    sourceUrl: "https://kontan.co.id",
    sourceLogo: "Ko",
    color: "#F7941D",
  },
  {
    url: "https://www.bisnis.com/rss",
    source: "Bisnis Indonesia",
    sourceUrl: "https://bisnis.com",
    sourceLogo: "Bi",
    color: "#003580",
  },
  {
    url: "https://www.cnbcindonesia.com/rss",
    source: "CNBC Indonesia",
    sourceUrl: "https://cnbcindonesia.com",
    sourceLogo: "CN",
    color: "#1C2B5E",
  },
];

const KEYWORDS = [
  "umkm",
  "ekonomi",
  "bisnis",
  "usaha kecil",
  "usaha mikro",
  "usaha menengah",
  "digital",
  "kewirausahaan",
  "perdagangan",
  "ekspor",
  "industri",
  "pertumbuhan ekonomi",
  "inflasi",
  "investasi",
  "entrepreneur",
  "startup",
  "rupiah",
  "pajak",
  "kredit",
  "modal usaha",
  "pemasaran",
  "e-commerce",
  "marketplace",
];

function extractImage(item: Parser.Item & CustomItem): string | undefined {
  if (item["media:thumbnail"]?.$?.url) return item["media:thumbnail"].$!.url;
  if (item["media:content"]?.$?.url) return item["media:content"].$!.url;
  if (item.enclosure?.url && item.enclosure.url.match(/\.(jpg|jpeg|png|webp)/i))
    return item.enclosure.url;

  // Try extracting from content:encoded
  const encoded = item["content:encoded"] ?? "";
  const match = encoded.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match) return match[1];

  return undefined;
}

function cleanHtml(str?: string): string {
  if (!str) return "";
  return str
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function isRelevant(item: Parser.Item): boolean {
  const text =
    (item.title ?? "").toLowerCase() +
    " " +
    (item.contentSnippet ?? "").toLowerCase();
  return KEYWORDS.some((kw) => text.includes(kw));
}

export async function fetchNews(): Promise<NewsItem[]> {
  const allItems: NewsItem[] = [];

  await Promise.allSettled(
    FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url);
        const items = parsed.items ?? [];

        for (const item of items) {
          if (!item.title || !item.link) continue;
          if (!isRelevant(item)) continue;

          allItems.push({
            id: item.guid ?? item.link ?? Math.random().toString(36),
            title: cleanHtml(item.title),
            description: cleanHtml(item.contentSnippet ?? item.content ?? "").slice(0, 220),
            link: item.link,
            pubDate: item.pubDate ?? item.isoDate ?? new Date().toISOString(),
            source: feed.source,
            sourceUrl: feed.sourceUrl,
            sourceLogo: feed.sourceLogo,
            image: extractImage(item as Parser.Item & CustomItem),
          });
        }
      } catch {
        // silently skip failed feeds — others still show
      }
    })
  );

  return allItems
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 60);
}
