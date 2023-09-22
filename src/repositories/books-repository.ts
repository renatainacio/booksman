import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import connection from "../database";
import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findUnique({
    where: {
      id
    }
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const bookData = {
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    cover: "",
    purchaseDate: new Date(book.purchaseDate)
  }
  book.cover ? bookData.cover: book.cover;
  await prisma.books.create({
    data: bookData
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  const result = await prisma.books.update({
    data: {
      grade,
      review
    },
    where: {
      id: bookId
    }
  });
  return result;
}