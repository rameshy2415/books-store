import BookDetails from "./BookDetails";

const BookList = ({ bookList }) => {
  console.log('From BookList'+ bookList)
  return (
    <>
      {bookList.map((book) => {
        return <BookDetails key={book.id} bookDetails={book} />;
      })}
    </>
  );
};

export default BookList;
