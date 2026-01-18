import "./App.css";
//import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookLibrary from "./components/BookLibrary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { unsplashAPI } from "./services/api";
import { useEffect } from "react";

function App() {
  // const [books, setBooks] = useState([]);

  // const addBookHandler = (value) => {
  //   console.log("Book Name: " + value.id + " " + value.name);
  //   setBooks([...books, value]);
  // };

  useEffect(() => {
    
    const fetchData = async () => {
     const response = await unsplashAPI.searchImage();
     console.log(response.data)
    };

    fetchData();

    return () => {
      // Synchronous cleanup logic here...
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto p-1">
        {/* <AddBook submit={addBookHandler} />
        <hr className="bg-gray-600"/>
        <BookList bookList={books} /> */}
        <BookLibrary />
      </main>
      <Footer />
    </>
  );
}

export default App;
