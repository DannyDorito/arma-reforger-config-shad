interface OpfMod
{
  data: Datum[];
  updated_at: string;
}

interface Datum
{
  name: string;
  summary: string;
  currentVersionNumber: string;
  currentVersionSize: string;
  preview: null | string;
  updatedAt: string;
  author: string;
  averageRating: number;
  id: string;
  ratingCount: number;
  subscriberCount: number;
  scenariosIds: string[];
}
