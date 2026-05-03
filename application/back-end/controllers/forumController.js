import { log } from "node:console";
import { 
    listForumsASC,
    findForum,
    findForumComments
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
      if (!comments) {
        return res.status(404).json({ error: "Comments not found" });
      }
      log(comments)
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}