import { useState } from "react"; import { useIPStore } from "../store/useIPStore";
const SearchForm = () => { const ipAddress = useIPStore( (state) => state.ipAddress );
const setIPAddress = useIPStore( (state) => state.setIPAddress );
const [input, setInput] = useState(ipAddress);
const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => { e.preventDefault();
const ip = input.trim();

if (!ip) return;

setIPAddress(ip);
};
return ( <form
onSubmit={handleSubmit}
className="mx-auto flex w-full max-w-[555px] overflow-hidden rounded-2xl bg-white"
> <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for any IP address" className="min-w-0 flex-1 px-6 py-5 text-base text-gray-800 outline-none" />
  <button
    type="submit"
    aria-label="Search IP address"
    className="flex w-16 shrink-0 items-center justify-center bg-black text-3xl text-white transition hover:bg-gray-800"
  >
    ›
  </button>
</form>
); };
export default SearchForm;