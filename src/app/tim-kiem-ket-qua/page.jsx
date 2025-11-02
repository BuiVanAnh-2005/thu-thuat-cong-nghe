import dynamic from "next/dynamic";

const SearchResultsPage = dynamic(() => import("./SearchResultsPage"), {
  ssr: false,
});

export default function Page() {
  return <SearchResultsPage />;
}
