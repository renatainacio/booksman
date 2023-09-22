import joi from "joi";
import { CreateBook } from "../protocols/book";

export const bookSchema = joi.object<CreateBook>({
  title: joi.string().required(),
  author: joi.string().required(),
  cover: joi.string().uri(),
  publisher: joi.string().required(),
  purchaseDate: joi.date().required()
});