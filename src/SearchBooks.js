import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Loader from './Loader'
import escapeRegExp from 'escape-string-regexp'


class SearchBooks extends Component {
  
  state = {
    query: '',
    searchBooks: [],
  }
  
  // updateShelf = (book, shelf) => {
  //   BooksAPI.update(book, shelf).then(
  //     this.setState(prevState => ({
  //       searchBooks: prevState.searchBooks.map(b => {
  //         if (b.id === book.id) {
  //           b.shelf = shelf;
  //         }
  //         return b
  //       })
  //     }))
  //   )
  // }

  updateQuery = (query) => {
    this.setState({ query });
    this.getBooks(query);
  }

  getBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchBooks) => {
        if (searchBooks.error) {
          this.setState({searchBooks: []})
        }else {
          this.setState({ searchBooks })
        }  
      })
    }else {
      this.setState({searchBooks: []})
    }
   
  }
  
    render() {
      const { query } = this.state;
      console.log(this.props.books);

      let filteredBooks = this.state.searchBooks;
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i');
        filteredBooks = this.state.searchBooks.filter((book) => match.test(book.title))
      }
      else{
        filteredBooks = this.state.searchBooks;
      }

      //filteredBooks.sort(sortBy( 'authors'))
      // let filteredBooks = this.state.books.filter(
      //   (book) => {
      //   return book.title.toLowerCase().indexOf(
      //       this.state.query.toLowerCase()) !== -1;
      //   } 
      // );
      
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search" 
              >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text" 
                  name="search"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />

              </div>
            </div>
            <div className="search-books-results">
            <div className="search-handling">
            </div>
              <ol className="books-grid">

              {
                filteredBooks.map(filteredBook => {
                  let shelf = 'none'
                  this.props.books.map(book => (
                    book.id === filteredBook.id ? 
                    shelf = book.shelf : ''
                  ));
                  return (
                    <li key={filteredBook.id}>
                      <Book
                        book={filteredBook} 
                        currentShelf={shelf}  
                        updateShelf={this.props.updateShelf}          
                      />
                    </li>
                  );
                })
              } 
             </ol>
            </div>
          </div>
        );
    }
}

export default SearchBooks