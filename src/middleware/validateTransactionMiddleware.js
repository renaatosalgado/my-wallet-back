import { transactionSchema } from "../schemas/transactionSchema.js";

export function validateTransaction(req, res, next) {
  const transaction = req.body;

  const validation = transactionSchema.validate(transaction, {
    abortEarly: false,
  });

  if (!validation.error) {
    next();
  } else {
    const errors = validation.error.details.map((detail) => detail.message);

    return res.status(422).send(errors);
  }
}
