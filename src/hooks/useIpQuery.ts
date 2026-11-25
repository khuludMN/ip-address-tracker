import { useQuery } from "@tanstack/react-query"; import { getIPData } from "./services/ipApi";
export const useIpQuery = (ip: string) => { return useQuery({ queryKey: ["ip", ip],
queryFn: () => getIPData(ip),

enabled: Boolean(ip),

staleTime: 5 * 60 * 1000,

retry: 1,
}); };