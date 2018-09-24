import React, {Component} from 'react'
import CategoryButton from './CategoryButton'

class Book extends Component {
    
    
    render() {
        console.log(this.props.books)
       
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 192, 
                backgroundImage: `url("${this.props.book.imageLinks.thumbnail}`}}></div>
                <div className="book-shelf-changer">
                    <CategoryButton 
                        value={this.props.value} 
                        
                    />
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book