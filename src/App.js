import React from 'react'

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
  }

  

  render() {
    return (
      
      <div className="app">
        {this.state.showSearchPage === true && (
          <SearchBooks 
            query={this.props.query}
            onClick={() => this.setState({ showSearchPage: false })}
            onUdateQuery={this.props.updateQuery}
            />
        )}

        {this.state.showSearchPage === false && (
          <Main
          />
        )} 
        <div className="open-search">
          <a 
          onClick={() => this.setState({ showSearchPage: true })}
          >Add a book</a>
        </div> 
      </div>
    )
  }
}

export default BooksApp
