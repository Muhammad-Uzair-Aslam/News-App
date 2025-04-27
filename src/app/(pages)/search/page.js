import SearchPageClient from '@/components/search/Search';
import { Suspense } from 'react';
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}