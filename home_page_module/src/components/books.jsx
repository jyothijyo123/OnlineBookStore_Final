import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";
import Item7 from "../images/item7.jpg";
import Item8 from "../images/item8.jpg";
import Item9 from "../images/item9.jpg";
import Item10 from "../images/item10.jpg";
import Item11 from "../images/item11.jpg";
import Item12 from "../images/item12.jpg";
import Item13 from "../images/item13.jpg";
import Item14 from "../images/item14.jpg";
import Item15 from "../images/item15.jpg";
import Item16 from "../images/item16.jpg";
import Item17 from "../images/item17.jpg";
import Item18 from "../images/item18.jpg";
import Item19 from "../images/item19.jpg";



import React, { Component } from "react";
import Category from "./category";
import Prefer from "./prefer";
import Book from "./book";
import BookDetails from "./bookdetails";
import MostPopular from "./mostPopular";
import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";

class Books extends Component {
    constructor(){
        super();
    }
    state = {
        books: [
          
         {
                _id: 1,
                title: "Unlocking Android",
                pageCount: 416,
                rating: 4,
                publishedDate: "2009-04-01",
                authors: "W. Frank Ableson",
                genre: "HTML, CSS & RWD",
                price: 100, 
               img: Item1
            },
            {
                _id: 2,
                title: "Android in Action, Second Edition",
                pageCount: 592,
                rating: 5,
                publishedDate: "2011-01-14",
                authors: "W. Frank Ableson",
                genre: "Full Stack Developer",
                price: 150, 
               img: Item2
            },
            {
                _id: 3,
                title: "Specification by Example",
                pageCount: 0,
                rating: 6,
                publishedDate: "2011-06-03",
                authors: ["Gojko Adzic"],
                genre: "HTML, CSS & RWD",
                price: 200, 
               img: Item3
            },
            {
                _id: 4,
                title: "Flex 3 in Action",
                pageCount: 576,
                rating: 9,
                publishedDate: "2009-02-02",
                authors: "Tariq Ahmed with Jon Hirschi",
                genre: "ReactJS",
                price: 250, 
               img: Item4
            },
            {
                _id: 5,
                title: "Flex 4 in Action",
                pageCount: 600,
                rating: 2,
                publishedDate: "2010-11-15",
                authors: ["Tariq Ahmed"],
                genre: "ReactJS",
                price: 300, 
               img: Item5
            },
            {
                _id: 6,
                title: "Collective Intelligence in Action",
                pageCount: 425,
                rating: 6,
                publishedDate: "2008-10-01",
                authors: ["Satnam Alag"],
                genre: "ReactJS",
                price: 350, 
               img: Item6
            },
            {
                _id: 7,
                title: "Zend Framework in Action",
                pageCount: 432,
                rating: 5,
                publishedDate: "2008-12-01",
                authors: ["Rob Allen"],
                genre: "HTML, CSS & RWD",
                price: 400, 
               img: Item7
            },
            {
                _id: 8,
                title: "Flex on Full Stack Developer",
                pageCount: 265,
                rating: 1,
                publishedDate: "2010-10-15",
                authors: ["Bernerd Allmon"],
                genre: "ReactJS",
                price: 450, 
               img: Item8
            },
            {
                _id: 9,
                title: "Griffon in Action",
                pageCount: 375,
                rating: 3,
                publishedDate: "2012-06-04",
                authors: "Andres Almiray",
                genre: "Full Stack Developer",
                price: 500, 
               img: Item9
            },
            {
                _id: 10,
                title: "OSGi in Depth",
                pageCount: 325,
                rating: 10,
                publishedDate: "2011-12-12",
                authors: ["Alexandre de Castro Alves"],
                genre: "Full Stack Developer",
                price: 550, 
               img: Item10
            },
            {
                _id: 11,
                title: "Flexible Rails",
                pageCount: 592,
                rating: 8,
                publishedDate: "2008-01-01",
                authors: ["Peter Armstrong"],
                genre: "HTML, CSS & RWD",
                price: 600, 
               img: Item11
            },
            {
              _id: 12,
              title: "Hello! Flex 4",
              pageCount: 258,
              rating: 10,
              publishedDate: "2009-11-01",
              authors: ["Peter Armstrong"],
              genre: "ReactJS",
              price: 650, 
             img: Item12
          },
            {
                _id: 13,
                title: "Hello! Flex 4",
                pageCount: 258,
                rating: 10,
                publishedDate: "2009-11-01",
                authors: ["Peter Armstrong"],
                genre: "ReactJS",
                price: 650, 
               img: Item13
            },
            {
                _id: 14,
                title: "Coffeehouse",
                pageCount: 316,
                rating: 7,
                publishedDate: "1997-07-01",
                authors: ["Levi Asher"],
                genre: "MongoDB",
                price: 700, 
               img: Item14
            },
            {
                _id: 15,
                title: "Team Foundation Server 2008 in Action",
                pageCount: 344,
                rating: 3,
                publishedDate: "2008-12-01",
                authors: ["Jamil Azher"],
                genre: "HTML, CSS & RWD",
                price: 750, 
               img: Item15
            },
            {
                _id: 16,
                title: "Brownfield Application Development in .NET",
                pageCount: 550,
                rating: 9,
                publishedDate: "2010-04-16",
                authors: ["Kyle Baley"],
                genre: "JS",
                price: 800, 
               img: Item16
            },
            {
                _id: 17,
                title: "MongoDB in Action",
                pageCount: 0,
                rating: 9,
                publishedDate: "2011-12-12",
                authors: ["Kyle Banker"],
                genre: "HTML, CSS & RWD",
                price: 850, 
               img: Item17
            },
            {
                _id: 18,
                title: "Distributed Application Development with NodeJS 6.0",
                pageCount: 504,
                rating: 10,
                publishedDate: "1998-06-01",
                authors: ["Michael J. Barlotta"],
                genre: "NodeJS",
                price: 900, 
               img: Item18
            },
            {
                _id: 19,
                title: "Jaguar Development with NodeJS 7",
                pageCount: 550,
                rating: 4,
                publishedDate: "1999-08-01",
                authors: ["Michael Barlotta"],
                genre: "NodeJS",
                price: 950, 
               img: Item19
            }
        ],
        genres: [
            { id: 1, name: "Full Stack Developer" },
            { id: 2, name: "ReactJS" },
            { id: 3, name: "NodeJS" },
            { id: 4, name: "JS" },
            { id: 5, name: "HTML, CSS & RWD" },
            { id: 6, name: "MongoDB" },
           
        ],
        selectedGenre: 1,
        pageSize: 2,
        selectedPage: 1,
        selectedRating: 2
    };
    handleSelectedRating = rating =>{
        console.log(rating);
        this.setState({ selectedRating : rating.id})
    };
    handleSelectedGenre = genre => {
        console.log(genre);
        this.setState({ selectedGenre: genre.id });
    };
    handlePageSelect = page => {
        this.setState({ selectedPage: page });
    };
    paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items)
            .slice(startIndex)
            .take(pageSize)
            .value();
    };

    render() {
        const { genres } = this.state;
        const { selectedGenre } = this.state;
        const { selectedRating } = this.state;
        const { bk } = this.state;
        const genre = genres.filter(genre => genre.id === selectedGenre);
        console.log(genre);

        const filteredBooks = this.state.books.filter(
            book => book.genre === genre[0].name
        );
        console.log(filteredBooks);

        const paginatedBooks = this.paginate(
            filteredBooks,
            this.state.selectedPage,
            this.state.pageSize
        );
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <Category
                            genres={this.state.genres}
                            selectedGenre={this.state.selectedGenre}
                            handleSelectedGenre={this.handleSelectedGenre}
                        />
                    </div>
                    <div className="col-8">
                        <Prefer/>
                        {paginatedBooks.map(book => (
                            <Link
                                to={{ pathname: `/books/${book._id}`, state: { book } }}
                                style={{ textDecoration: "none" }}
                            >
                                <Book book={book} />
                            </Link>
                            
                        ))}

                    </div>
                </div>

                <Pagination
                    pageSize={this.state.pageSize}
                    totalBooks={filteredBooks.length}
                    selectedPage={this.state.selectedPage}
                    handlePageSelect={this.handlePageSelect}
                />
            </div>
        );
    }
}

export default Books;
