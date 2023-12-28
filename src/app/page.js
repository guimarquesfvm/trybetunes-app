import Results from "@/components/results";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-1">
        <SearchBar />
      </div>
      <div className="h-2/3 w-full bg-white  overflow-scroll">
        <div className="flex items-center justify-center h-full w-full">
          <Results />
        </div>
      </div>
    </>
  );
}
