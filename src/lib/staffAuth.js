import { supabase } from "./supabase";

export async function loginStaff(email, password) {
  const { data, error } = await supabase
    .from("staff")
    .select("*")
    .eq("email", email)
    .eq("temporary_password", password)
    .single();

  if (error) {
    return { error };
  }

  localStorage.setItem(
    "staff",
    JSON.stringify(data)
  );

  return { data };
}

export function getCurrentStaff() {
  return JSON.parse(localStorage.getItem("staff"));
}

export function logoutStaff() {
  localStorage.removeItem("staff");
}