// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>,
) {
  res.status(200).json({ message: "API Test Successful!" });
}
