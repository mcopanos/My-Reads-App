import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'


class SearchBooks extends Component {
  
  state = {
    query: '',
    searchBooks: [],
  }

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
      let filteredBooks = this.state.searchBooks;

      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i');
        filteredBooks = this.state.searchBooks.filter((book) => match.test(book.title))
      }
      else{
        filteredBooks = this.state.searchBooks;
      }
      
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search" 
              >Close</Link>
              <div className="search-books-input-wrapper">
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
                        updateShelf={this.props.updateBook}          
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