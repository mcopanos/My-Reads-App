import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import Main from './Main'


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      this.setState(prevState => ({
        books: prevState.books.map(b => {
          if (b.id === book.id) {
            b.shelf = shelf;
          }
          return b
        })
      }))
    )
  }
  
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks 
          query={this.props.query}
          onUdateQuery={this.props.updateQuery}
          books={this.state.books}
          updateBook={this.updateBook}
        />
        )}/>
        
        <Route exact path="/" render={() => (
          <Main 
          books={this.state.books}
          updateShelf={this.updateShelf}
          />
        )}/>

        <div className="open-search">
          <Link 
            to="/search"
          >Add a book</Link>
        </div> 

      </div>
    )
  }
}

export default BooksApp
