import db from "../db.js";

export async function validateToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    const session = await db.collection("sessions").findOne({ token });
    if (!session) return sendStatus(401);

    const user = await db.collection("users").findOne({ _id: session._id });
    if (!user) return res.sendStatus(401);

    res.locals.user = user;

    next();
  } catch (error) {
    res.status(500).send(error);
  }

  next()
}
