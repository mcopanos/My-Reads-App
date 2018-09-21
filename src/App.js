import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import CompletedReads from './CompletedReads'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    availableBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((availableBooks) => {
      this.setState({ availableBooks })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage === true && (
          <SearchBooks 
            onClick={() => this.setState({ showSearchPage: false })}
            />
        )}

        {this.state.showSearchPage === false && (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <CurrentlyReading />

                <WantToRead />

                <CompletedReads />

              </div>
            </div>
            <div className="open-search">
              <a 
              onClick={() => this.setState({ showSearchPage: true })}
              >Add a book</a>
            </div> 
          </div>
        )} 
      </div>
    )
  }
}

export default BooksApp
