import { useState } from "react";

const AddBook = ({ submit }) => {
  const [bookName, setBookName] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    submit({ id: Date.now(), name: bookName });
  };

  const bookChangeHandler = (event) => {
    setBookName(event.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div class="flex items-center justify-center p-6">
          <div class="w-full max-w-md p-8 bg-white rounded-2xl">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>

            <div class="space-y-4">
              <div>
                {/* <label class="block text-sm font-semibold text-gray-600 mb-1">
                  Book name
                </label> */}
                <input
                  type="text"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                  placeholder="Enter book name"
                  name={bookName}
                  onChange={bookChangeHandler}
                />
              </div>

              <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-200">
               Add Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBook;
