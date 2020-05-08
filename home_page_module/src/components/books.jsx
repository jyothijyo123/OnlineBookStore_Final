import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";
import Item7 from "../images/item7.jpg";
import Item8 from "../images/item8.jpg";

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
                title: "Hands-On Full Stack Development with Go",
                author: "Mina Andrawos",
                rating: 10,
                img: Item1,
                publish: 2015,
              
                price: 110,
                genre: "Full Stack Development",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 2,
                title: "React",
                author: "Lionel Lopez",
                rating: 4,
                img: Item2,
               publish: 2016,
                price: 116,
                genre: "ReactJS",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 3,
                title: "Learning Node-2",
                author: "Shelley Powers",
                rating: 5,
                img: Item3,
               publish: 2017,
                price: 348,
                genre: "NodeJS",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 4,
                title: "Up and Going JS",
                author: "Kyle Simpson",
                rating: 7,
                img: Item4,
               publish: 2018,
                price: 218,
                genre: "JS",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 5,
                title: "Web Design Playground",
                author: "Paul McFedries",
                rating: 10,
                img: Item5,
               publish: 2019,
                price: 424,
                genre: "HTML, CSS & RWD",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 6,
                title: "Data Modeling for MongoDB",
                author: "Steve Hoberman",
                rating: 6,
                img: Item6,
               publish: 2020,
                price: 2217,
                genre: "MongoDB",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 7,
                title: "The Road to Learn React",
                author: "Robin Wieruch",
                rating: 9,
                img: Item7,
               publish: 2020,
                price: 430,
                genre: "ReactJS",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              },
              {
                _id: 8,
                title: "The Full Stack Developer",
                author: "Chris Northwood",
                rating: 3,
                img: Item8,
               publish: 2010,
                price: 212,
                genre: "Full Stack Development",
                info:
                  "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                inCart: false,
                count: 0,
                total: 0
              }
        ],
        genres: [
            { id: 1, name: "Full Stack Development" },
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
