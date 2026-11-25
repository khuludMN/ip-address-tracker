import SearchForm from "./component/SearchForm"; import InformationCard from "./component/InformationCard"; import MapView from "./component/MapView";
import { useIPStore } from "./store/useIPStore"; import { useIpQuery } from "./hooks/useIpQuery";
function App() { const ipAddress = useIPStore( (state) => state.ipAddress );
const { data, isLoading, isError, error, } = useIpQuery(ipAddress);
const errorMessage = isError ? error instanceof Error ? error.message : "Something went wrong" : null;
return ( <main className="min-h-screen"> <section className="tracker-header relative z-10 h-[280px] bg-[#4837c7] bg-[url('/images/pattern-bg-desktop.png')] bg-cover bg-center px-5 pt-8"> <h1 className="mb-8 text-center text-3xl font-bold text-white"> IP Address Tracker </h1>
    <SearchForm />

    <div className="absolute left-1/2 top-[165px] w-[90%] max-w-[1110px] -translate-x-1/2">
      <InformationCard
        data={data}
        loading={isLoading}
        error={errorMessage}
      />
    </div>
  </section>

  <section className="relative z-0 h-[calc(100vh-280px)] min-h-[450px]">
    {data && !isError ? (
      <MapView
        latitude={data.latitude}
        longitude={data.longitude}
      />
    ) : (
      <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
        {isLoading
          ? "Loading map..."
          : "Map is unavailable"}
      </div>
    )}
  </section>
</main>
); }
export default App;