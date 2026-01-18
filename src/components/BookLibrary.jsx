import React, { useState } from "react";
import { Search, Star, BookOpen, Trash2, Plus, Pencil } from "lucide-react";

export default function BookLibrary() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      rating: 4.5,
      status: "read",
      cover: "bg-gradient-to-br from-amber-400 to-orange-600",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      rating: 5,
      status: "read",
      cover: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      rating: 4,
      status: "reading",
      cover: "bg-gradient-to-br from-green-500 to-emerald-700",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      rating: 4.5,
      status: "read",
      cover: "bg-gradient-to-br from-pink-400 to-rose-600",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      rating: 3.5,
      status: "wishlist",
      cover: "bg-gradient-to-br from-blue-400 to-indigo-600",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    rating: 0,
    status: "wishlist",
  });

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || book.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      const colors = [
        "bg-gradient-to-br from-purple-400 to-purple-700",
        "bg-gradient-to-br from-cyan-400 to-blue-600",
        "bg-gradient-to-br from-red-400 to-pink-600",
        "bg-gradient-to-br from-yellow-400 to-orange-500",
        "bg-gradient-to-br from-teal-400 to-green-600",
      ];

      setBooks([
        ...books,
        {
          id: Date.now(),
          ...newBook,
          year: parseInt(newBook.year) || new Date().getFullYear(),
          cover: colors[Math.floor(Math.random() * colors.length)],
        },
      ]);

      setNewBook({
        title: "",
        author: "",
        year: "",
        rating: 0,
        status: "wishlist",
      });
      setShowAddForm(false);
    }
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id) => {
   setNewBook(books.find((book) => book.id === id))
  };

  const updateBookStatus = (id, newStatus) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book,
      ),
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-amber-50 to-orange-50 p-6 mt-38">
      <div className="max-w-6xl mx-auto">
        {/* <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">My Library</h1>
          </div>
          <p className="text-gray-600">Manage your personal book collection</p>
        </div> */}

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search books or authors..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Books</option>
              <option value="read">Read</option>
              <option value="reading">Currently Reading</option>
              <option value="wishlist">Wishlist</option>
            </select>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Add Book
            </button>
          </div>

          {showAddForm && (
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Add New Book</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Book Title"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newBook.title}
                  onChange={(e) =>
                    setNewBook({ ...newBook, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Author"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newBook.author}
                  onChange={(e) =>
                    setNewBook({ ...newBook, author: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Year"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newBook.year}
                  onChange={(e) =>
                    setNewBook({ ...newBook, year: e.target.value })
                  }
                />
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newBook.status}
                  onChange={(e) =>
                    setNewBook({ ...newBook, status: e.target.value })
                  }
                >
                  <option value="wishlist">Wishlist</option>
                  <option value="reading">Reading</option>
                  <option value="read">Read</option>
                </select>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleAddBook}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Save Book
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                className={`h-48 ${book.cover} flex items-center justify-center`}
              >
                <div className="text-white text-center p-4">
                  <BookOpen className="w-16 h-16 mx-auto mb-2 opacity-80" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <p className="text-sm text-gray-500 mb-3">{book.year}</p>

                {book.status === "read" && (
                  <div className="mb-3">{renderStars(book.rating)}</div>
                )}

                <div className="flex items-center justify-between">
                  <select
                    value={book.status}
                    onChange={(e) => updateBookStatus(book.id, e.target.value)}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="wishlist">Wishlist</option>
                    <option value="reading">Reading</option>
                    <option value="read">Read</option>
                  </select>

                  <div className="flex gap-2">
                    <button
                      onClick={() => editBook(book.id)}
                      className="p-2 text-blue-600 hover:bg-red-50 rounded-lg transition bg-gray-100"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => deleteBook(book.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition bg-gray-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No books found</p>
          </div>
        )}
      </div>
    </div>
  );
}
