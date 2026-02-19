/**
 * Client-side API helpers for the NFStay backend.
 * All routes require the app to be running (e.g. npm run dev) and MONGODB_URI set for fresh data.
 */

const BASE = "";

async function fetcher<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error((err as { error?: string }).error || "Request failed");
  }
  return res.json();
}

export const api = {
  properties: {
    list: () => fetcher<Array<{ _id: string; image: string; type: string; location: string; rating: number; price: number }>>("/api/properties"),
    create: (body: { image: string; type: string; location: string; rating: number; price: number }) =>
      fetcher("/api/properties", { method: "POST", body: JSON.stringify(body) }),
  },
  claims: {
    list: (params?: { status?: string; source?: string; limit?: number }) => {
      const sp = new URLSearchParams();
      if (params?.status) sp.set("status", params.status);
      if (params?.source) sp.set("source", params.source);
      if (params?.limit) sp.set("limit", String(params.limit));
      const q = sp.toString();
      return fetcher<Array<{ _id: string; source: string; date: string; time: string; amount: string; status: string }>>(
        `/api/claims${q ? `?${q}` : ""}`
      );
    },
  },
  faq: {
    list: () => fetcher<Array<{ _id: string; question: string; answer: string }>>("/api/faq"),
  },
  stats: {
    get: (type: "dashboard" | "printer" | "farm") =>
      fetcher<Array<{ _id: string; label: string; value: string; sub?: string; gradient?: boolean; iconKey: string }>>(
        `/api/stats?type=${type}`
      ),
  },
  charts: {
    portfolio: () => fetcher<Array<{ date: string; mobile?: number; desktop?: number }>>("/api/charts/portfolio"),
    line: () => fetcher<Array<{ date: string; mobile?: number; desktop?: number }>>("/api/charts/line"),
    radial: () =>
      fetcher<{ data: { rocks: number; lpTokens: number; stay: number }; assets: Array<{ name: string; percentage: number; color: string }> }>(
        "/api/charts/radial"
      ),
  },
  team: {
    list: () =>
      fetcher<Array<{ _id: string; name: string; role: string; image: string; linkedinUrl?: string }>>("/api/team"),
  },
  marketplace: {
    listings: (params?: { limit?: number; creator?: string }) => {
      const sp = new URLSearchParams();
      if (params?.limit) sp.set("limit", String(params.limit));
      if (params?.creator) sp.set("creator", params.creator);
      const q = sp.toString();
      return fetcher<Array<{ _id: string; tokenId: string; creator: string; price: string; image?: string; title?: string }>>(
        `/api/marketplace/listings${q ? `?${q}` : ""}`
      );
    },
    stats: () =>
      fetcher<{ rocksListed: number; totalSalesVolume: string }>("/api/marketplace/stats"),
  },
};
