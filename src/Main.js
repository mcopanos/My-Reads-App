import React, { Component } from 'react'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import CompletedReads from './CompletedReads'
import * as BooksAPI from './BooksAPI'

class Main extends Component {
  state = {
    books: [],
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      
    })
  }

    render() {
      console.log(this.state.books);
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <CurrentlyReading
                  books={this.state.books}
                  
                />

                <WantToRead 
                  books={this.state.books}
                  
                />

                <CompletedReads 
                  books={this.state.books}
                 
                />

              </div>
            </div>
            
          </div>
        )
    }
}

export default Main