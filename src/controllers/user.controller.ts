import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    res.json({ message: "List of users" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
