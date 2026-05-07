import { 
    listForumsASC,
    findForum,
    findForumComments,
    createForum,
    deleteForum,
    createComment
  } from "../database/DBQueries.js";


export const listAllForums = async (req, res) => {
    try{
        const forums = await listForumsASC();
        res.status(200).json(forums);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const FindTheForum = async (req, res) => {
    try{
      const { id } = req.params;
      const forum = await findForum(id);
      if (!forum) {
        return res.status(404).json({ error: "Forum not found" });
      }
      res.status(200).json(forum);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const FindComments = async (req, res) => {
    try{
      const { id } = req.params;
      const comments = await findForumComments(id);
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const CreateNewForum = async (req, res) => {
    try{
      const forum_data = req.body;
      const newForum = await createForum(forum_data.form);
      res.status(201).json(newForum);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
}

export const DeleteForum = async (req, res) => {
    try{
      const { forum_id } = req.params;
      const result = await deleteForum(forum_id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const CreateNewComment = async (req, res) => {
    try{
      const comment_data = req.body;
      console.log(comment_data)
      const newcomment = await createComment(comment_data);
      res.status(201).json(newcomment);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
}