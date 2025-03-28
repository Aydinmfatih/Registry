import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import type { SearchLoaderResults } from "./searchLoader";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResults

  const renderResults = searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />
  })
  return <div>
    <h1 className="text-2xl font-bold my-6">Search Page</h1>

    <div className="space-y-4 mt-4">
      {renderResults}
    </div>
  </div>;
}
