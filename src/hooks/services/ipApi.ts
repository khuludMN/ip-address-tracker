import axios from "axios";
 import type { IPData } from "../../types/ip";
export const getIPData = async ( ip: string ): Promise<IPData> => { const response = await axios.get<IPData>( `https://ipwho.is/${encodeURIComponent(ip)}` );
if (!response.data.success) { throw new Error("Invalid IP Address"); }
return response.data; };