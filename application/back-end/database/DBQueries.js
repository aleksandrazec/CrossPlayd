import supabase from "../config/supabaseClient.js";

export const getUsers = async () => {
    const { data, error } = await supabase.from("User").select("*");
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};

export const getUserById = async (user_id) => {
    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("user_id", user_id)
      .single();
    console.log(data);
    if (error) throw new Error(error.message);
    return data;
};

export const createUser = async (user_data) => {
    console.log([user_data]);
    const { data, error } = await supabase
        .from("User")
        .insert([user_data])
        .select();
    if (error) throw new Error(error.message);
    return data;
};

export const updateUser = async (user_id, updates) => {
    const { data, error } = await supabase
    .from("User")
    .update(updates)
    .eq("user_id", user_id)
    .select();

    if (error) throw new Error(error.message);
    return data;
};

export const deleteUser = async (user_id) => {
const { error } = await supabase
    .from("User")
    .delete()
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);
  return { success: true, message: "User deleted successfully" };
};