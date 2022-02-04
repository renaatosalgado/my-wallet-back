import joi from "joi";

export const transactionSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required(),
});
