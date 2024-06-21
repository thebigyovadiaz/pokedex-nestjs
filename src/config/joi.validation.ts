import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MongoDB_URL: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
  DB_NAME: Joi.required(),
});
