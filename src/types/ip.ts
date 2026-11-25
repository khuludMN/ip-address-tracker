export interface IPData {
  success: boolean;
  ip: string;

  city: string | null;
  region: string | null;
  country: string | null;
  postal: string | null;

  latitude: number;
  longitude: number;

  timezone: {
    id: string;
    utc: string;
  };

  connection: {
    isp: string | null;
  };
}