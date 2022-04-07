import React, { useEffect } from "react"
import Book from './components/Book'
// import BookViewer from "./components/BookViewer"
import './style.css'
// import { axios } from 'axios'
import $ from 'jquery'



export default function App(){


// STATES
    const [searchBarValue, setSearchBarValue] = React.useState("The Singularity is Near")
    const [bookSearch, setBookSearch] = React.useState("")
    const [book, setBookData] = React.useState({
        bookWidth: 2,
        bookName: "",
        cover: "./components/instagramLogo.png",
        title: "",
        author: "",
        description: "",
        previewLink: ""
    })

    console.log(book.author)


// API CALL    
    useEffect(() => {
        var googleAPI = `https://www.googleapis.com/books/v1/volumes?q=${searchBarValue}&key=AIzaSyDKRKb3D4qZ1Ag7Wvo2wEOrdmCLZW8A-iw`

         const fetchData = async () => {
            try {
                const response = await fetch(googleAPI);
                const googleBooksData = await response.json();

                console.log(googleBooksData.items[0].volumeInfo);




                setBookData(prevState => {
                    
                    return {
                        ...book,
                        bookWidth: googleBooksData.items[0].volumeInfo.pageCount / 200,
                        bookName:  googleBooksData.items[0].volumeInfo,
                        cover:   googleBooksData.items[0].volumeInfo.imageLinks.thumbnail,
                        author: googleBooksData.items[0].volumeInfo.authors, 
                        description: googleBooksData.items[0].volumeInfo.description,
                        title: googleBooksData.items[0].volumeInfo.title,
                        previewLink: googleBooksData.items[0].volumeInfo.previewLink
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
        <div className="mainDiv">
            <div  className="sceneCanvas">
            <Book width={book.bookWidth} cover={book.cover}/>
            </div>
            <div className="bookCard">
            {/* <Searchbar value={bookSearch} handleChange={searchBarValue}/> */}
                <input id="search" autoComplete="off"></input>
                <button onClick={()=>{
                    let searchInput = document.getElementById('search')
                    // console.log(searchInput.value)
                    // setSearchBarValue(searchInput.value)
                    // console.log(searchInput.value)
                    setSearchBarValue(searchInput.value)
                    // console.log(book.bookWidth)
                    



                    
                    // console.log(searchBarValue)
                    // console.log(book)
                }}>SEARCH BOOK</button>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <img src={book.cover} cover={book.cover}></img>
                <p>{book.description}</p>
                {/* <BookViewer /> */}
            </div>
            
        </div>
    )
}