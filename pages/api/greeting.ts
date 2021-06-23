import { NextApiRequest, NextApiResponse } from "next";

// https://nextjs.org/docs/api-routes/introduction

interface GreetingData {
  greeting: string;
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GreetingData>
) {
  res.status(200).json({ greeting: "Hey 👋" });
}
