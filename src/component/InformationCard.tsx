import type { IPData } from "../types/ip";
interface Props {
   data: IPData | undefined;
    loading: boolean; 
    error: string | null;
   }
const InformationCard = ({
   data, 
   loading,
    error,
   }: Props) => { 
    if (loading) {
       return ( 
       <div className="rounded-2xl bg-white p-8 text-center shadow-xl"> 
       Loading information...
        </div>
         ); 
        }
if (error) {
   return (
     <div className="rounded-2xl bg-white p-8 text-center text-red-500 shadow-xl"> 
     {error}
      </div>
       );
       }
if (!data) { 
  return null;
 }
const location = [
   data.city,
    data.region, 
    data.postal, 
  ] 
  .filter(Boolean)
   .join(", ");
const information = [
   { title: "IP ADDRESS",
     value: data.ip, 
    }, 
    {
       title: "LOCATION", 
       value: location || data.country || "Unknown",
       },
        { title: "TIMEZONE",
           value: `UTC ${data.timezone?.utc ?? "Unknown"}`, 
          }, 
          { title: "ISP", value: data.connection?.isp || "Unknown", }, ];
return ( <div className="grid w-full grid-cols-1 gap-7 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-4 md:gap-5"> {information.map((item) => ( <div
key={item.title}
className="text-center md:border-r md:border-gray-200 md:pr-5 md:text-left last:border-none"
> <h3 className="mb-3 text-xs font-bold tracking-[2px] text-gray-400"> {item.title} </h3>
      <p className="break-words text-xl font-bold text-gray-800">
        {item.value}
      </p>
    </div>
  ))}
</div>
); };
export default InformationCard;