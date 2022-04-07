import React, { useEffect } from "react"
import Book from './components/Book'
import './style.css'
// import { axios } from 'axios'
import $ from 'jquery'


export default function App(){


// STATES
    const [searchBarValue, setSearchBarValue] = React.useState("drive")
    const [bookSearch, setBookSearch] = React.useState("")
    const [book, setBookData] = React.useState({
        bookWidth: 2,
        bookName: "",
        cover: "./components/instagramLogo.png",
    })


// API CALL    
    useEffect(() => {
        var googleAPI = `https://www.googleapis.com/books/v1/volumes?q=${searchBarValue}&key=AIzaSyDKRKb3D4qZ1Ag7Wvo2wEOrdmCLZW8A-iw`

         const fetchData = async () => {
            try {
                const response = await fetch(googleAPI);
                const googleBooksData = await response.json();

                // console.log(googleBooksData.items[0].volumeInfo.pageCount);
                setBookData(prevState => {
                    return {
                        ...book,
                        bookWidth: googleBooksData.items[0].volumeInfo.pageCount / 200,
                        bookName:  googleBooksData.items[0].volumeInfo,
                        cover:   googleBooksData.items[0].volumeInfo.imageLinks.thumbnail
                        }
                    })


                // console.log(googleBooksData.items[0].volumeInfo.imageLinks.thumbnail)
                    } catch (error) {
                        console.log("error", error);
                    }
                    };

        fetchData();

    }, [searchBarValue]);

    
    // console.log(pageLength)
    
                    
    

    // var googleAPI = `https://www.googleapis.com/books/v1/volumes?q=${searchBarValue}&key=AIzaSyDKRKb3D4qZ1Ag7Wvo2wEOrdmCLZW8A-iw`

    // $.getJSON(googleAPI, function (search) {
    // // setBookSearch(search.items)
    //  console.log(search.items[0].volumeInfo.pageCount)
    // //  createBook(search.items[0].volumeInfo.pageCount)



    // });


    return (
        <div>
            <Book width={book.bookWidth} cover={book.cover}/>
            {/* <Searchbar value={bookSearch} handleChange={searchBarValue}/> */}
            <input id="search" ></input>
            <button onClick={()=>{
                let searchInput = document.getElementById('search')
                // console.log(searchInput.value)
                // setSearchBarValue(searchInput.value)
                // console.log(searchInput.value)
                setSearchBarValue(searchInput.value)
                // console.log(book.bookWidth)
                



                
                // console.log(searchBarValue)
                // console.log(book)
            }}></button>
            <img src={book.cover} cover={book.cover}></img>
        </div>
    )
}