import React, {Component} from 'react'
//import CategoryButton from './CategoryButton'
//import SearchBooks from './SearchBooks';

class Book extends Component {

    render() {
        let hasThumbnail = this.props.book.imageLinks ? 
        this.props.book.imageLinks.thumbnail : '';
        
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 192, 
                backgroundImage: `url("${hasThumbnail}`}}></div>
                <div className="book-shelf-changer">
                <select 
                    onChange={(event) => this.props.updateShelf(
                    this.props.book, event.target.value
                    )}
                    // value={this.props.book.shelf}
                    value={this.props.currentShelf} 
                    
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book