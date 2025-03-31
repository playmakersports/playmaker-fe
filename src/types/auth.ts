export type AuthResponse = {
  access_token: string;
  expires_in: number;
  id_token: string | null;
  newUserYn: "Y" | "N";
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string | null;
  token_type: string | null;
};
