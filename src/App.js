import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import Main from './Main'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
  

  render() {
    return (
      
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks 
          query={this.props.query}
          onUdateQuery={this.props.updateQuery}
          books={this.state.books}
          updateShelf={this.updateShelf}
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
