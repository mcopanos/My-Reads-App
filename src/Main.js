import React, { Component } from 'react'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import CompletedReads from './CompletedReads'

class Main extends Component {
   
    render() {
      let books = this.props.books
      
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <CurrentlyReading
                  books={books}
                  updateShelf={this.props.updateShelf}
                />

                <WantToRead 
                  books={books}
                  updateShelf={this.props.updateShelf}                                  
                />

                <CompletedReads 
                  books={books}
                  updateShelf={this.props.updateShelf}
                />

              </div>
            </div>
            
          </div>
        )
    }
}

export default Main