export type User = Partial<{
  usr_id: number;
  usr_fname: string;
  usr_lname: string;
  usr_username: string;
  usr_email: string;
  usr_profile: string;
  usr_email_ver_token: string;
  usr_reset_pass_token: string;
  usr_email_verified_at: string;
  usr_provider_id: string | null;
  usr_login_type: string | null;
  usr_status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  role: string;
  usr_profile_img: string;
  token: string;
}>;

type DanceStyle = Partial<{
  ds_id: number;
  ds_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}>;

export type Event = Partial<{
  event_id: number;
  event_name: string;
  description: string;
  event_profile_pic: string;
  event_profile_img: string;
  event_url: string;
  event_price_from: number;
  event_price_to: number;
  readable_from_date: string;
  readable_to_date: string;
  isFavorite: number;
  city: string;
  country: string;
  keywords: string[];
  danceStyles: DanceStyle[];
  event_date_id: number;
}>;
