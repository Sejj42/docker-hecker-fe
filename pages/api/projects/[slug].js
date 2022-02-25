const { projects } = require("./data.json");

export default function handler(req, res) {
  const project = projects.filter((proj) => proj.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(project);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed.` });
  }
}
