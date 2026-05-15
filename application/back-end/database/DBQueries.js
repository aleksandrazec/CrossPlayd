import supabase from "../config/supabaseClient.js";

export const getUsers = async () => {
  const { data, error } = await supabase.from("User").select("*");
  // console.log(data);
  if (error) throw new Error(error.message);
  return data;
};

export const getUserById = async (user_id) => {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("user_id", user_id)
    .single();
  // console.log(data);
  if (error) throw new Error(error.message);
  return data;
};

export const createUser = async (user_data) => {
  // console.log([user_data]);
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

export const getUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("username", username)
    .single();
  // console.log(data);
  if (error) throw new Error(error.message);
  return data;
};
export const listForumsASC = async () => {
  const { data, error } = await supabase
    .from("Forum")
    .select("*")
    .order('date', { ascending: false })
  if (error) throw new Error(error.message);
  return { data };
};

export const findForum = async (forum_id) => {
  const { data, error } = await supabase
    .from("Forum")
    .select("*")
    .eq("forum_id", forum_id)
    .single()
  if (error) throw new Error(error.message);
  return { data };
}

export const findForumComments = async (forum_id) => {
  const { data, error } = await supabase
    .from("CommentForum")
    .select("*")
    .order('date', { ascending: false })
    .eq("forum_id", forum_id)
    .is("reply_id", null)

  if (error) throw new Error(error.message);
  return { data };
}


export const createForum = async (forum_data) => {
  const { data, error } = await supabase
    .from("Forum")
    .insert([forum_data])
    .select()
  if (error) throw new Error(error.message);
  return { data };
}


export const deleteForum = async (forum_id) => {
  const { data, error } = await supabase
    .from("Forum")
    .delete()
    .select('forum_id', forum_id)
  if (error) throw new Error(error.message);
  return { data };
}

export const createComment = async (comment_data) => {
  const { data, error } = await supabase
    .from("CommentForum")
    .insert([comment_data])
    .select()
  if (error) throw new Error(error.message);
  return { data };
}

export const getReplies = async (reply_id) => {
  const { data, error } = await supabase
    .from("CommentForum")
    .select("*")
    .eq("reply_id", reply_id)
    .order('date', { ascending: false })
  if (error) throw new Error(error.message);
  return { data };
}

//Get reviews
export const getReviews = async (review_id) => {
  const { data, error } = await supabase
    .from("GamePage")
    .select("*")
    .eq("review_id", review_id)
    .order("data", { ascending: false })
  if (error) throw new Error(error.message);
  return { data };
}

export const getLibrary = async (user_id) => {
  const { data, error } = await supabase
    .from("GameLibrary")
    .select("*")
    .eq("user_id", user_id)
    .order("date", { ascending: false })
  if (error) throw new Error(error.message);
  return { data };
}

export const addToLibrary = async (game_data) => {
  const { data, error } = await supabase
    .from("GameLibrary")
    .insert([game_data])
    .select()
  if (error) throw new Error(error.message);
  return { data };
}

export const getGameInLibrary = async (game_id, user_id) => {
  const { data, error } = await supabase
    .from("GameLibrary")
    .select("*")
    .eq("user_id", user_id)
    .eq("game_id", game_id)
    .order("date", { ascending: false })
  if (error) throw new Error(error.message);
  return { data };
}

export const editLibrary = async (game_id, user_id, rating, status ) => {
  const { data, error } = await supabase
    .from("GameLibrary")
    .update({ 
      rating: rating,
      status: status
     })
    .eq("user_id", user_id)
    .eq("game_id", game_id)
    .select()
  if (error) throw new Error(error.message);
  return { data };
}

export const getReviewsForGame = async (id) => {
  const {data, error} = await supabase
    .from("Review")
    .select("*")
    .eq("game_id",id)
  if (error) throw new Error(error.message);
  return { data };
}