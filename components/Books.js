import MakeTable from "./MakeTable.js";
import Accordion from './Accordion.js';

export default {

    components: {
        MakeTable,
        Accordion
    },

    template: `

        <div class="accordion">
            <accordion></accordion>
        </div>
    `,

    data() {

        return {

            accTypes: [
                {type: "reading", htmlId: "readingHead", status: "reading", heading: "Reading", class: "accordion-button bg-warning", dataTarget: "#collapseReading", ariaCont: "collapseReading"},
                {type: "tbr", htmlId: "tbrHead", status: "tbr", heading: "TBR", class: "accordion-button bg-danger", dataTarget: "#collapseTbr", ariaCont: "collapseTbr"},
                {type: "read", htmlId: "readHead", status: "read", heading: "Read", class: "accordion-button bg-success", dataTarget: "#collapseRead", ariaCont: "collapseRead"},
                {type: "collection", htmlId: "collectHead", status: "collection", heading: "Collection", class: "accordion-button bg-primary", dataTarget: "#collapseCollect", ariaCont: "collapseCollect"}
              ],

            tblcols: [
                {header: "Title"},
                {header: "Author"},
                {header: "Gender"},
                {header: "Country"},
                {header: "Genre"},
                {header: "Pages"},
                {header: "Year Published"},
                {header: "Format"},
                {header: "Date Started"},
                {header: "Date Finished"},
                {header: "Rating"},
                {header: "Status"},
                {header: "Collection"}
            ],

            books: [
                {title: "The Map that Led to You",                  author: "Ella Mcleod",      gender: "female",   country: "UK",      genre: "Fantasy",       pages: 480, pubYear: 2024, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "The Final Strife",                         author: "Saara El Arifi",   gender: "female",   country: "UK",      genre: "Fantasy",       pages: 512, pubYear: 2022, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "An Ember in the Ashes",                    author: "Sabaa Tahir",      gender: "female",   country: "USA",     genre: "Fantasy",       pages: 446, pubYear: 2016, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "When Among Crows",                         author: "Veronica Roth",    gender: "female",   country: "USA",     genre: "Fantasy",       pages: 165, pubYear: 2024, format: "hardback",      dateStart: "2024-09-03", dateEnd: "2024-09-17", rating: "", status: "read", collection: true},
                {title: "In a Glass Darkly",                        author: "Sheridan Le Fanu", gender: "male",     country: "Ireland", genre: "Gothic",        pages: 384, pubYear: 1972, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: false},
                {title: "Days at the Morisaki Bookshop",            author: "Satoshi Yagisawa", gender: "male",     country: "Japan",   genre: "Contemporary",  pages: 147, pubYear: 2023, format: "paperback",     dateStart: "2024-08-28", dateEnd: "2024-08-29", rating: "", status: "read", collection: false},
                {title: "Delicious In Dungeon",                     author: "Ryoko Kui",        gender: "female",   country: "Japan",   genre: "Fantasy",       pages: 192, pubYear: 2015, format: "graphic",       dateStart: "2024-08-23", dateEnd: "2024-08-28", rating: "", status: "read", collection: true},
                {title: "Wisteria",                                 author: "Adalyn Grace",     gender: "female",   country: "USA",     genre: "Gothic",        pages: 419, pubYear: 2024, format: "hardback",      dateStart: "2024-08-24", dateEnd: "2024-08-27", rating: "", status: "read", collection: true},
                {title: "The Phoenix Keeper",                       author: "S.A. MacLean",     gender: "female",   country: "USA",     genre: "Fantasy",       pages: 464, pubYear: 2024, format: "hardback",      dateStart: "2024-08-14", dateEnd: "2024-08-17", rating: "", status: "read", collection: false},
                {title: "The Hitchhiker's Guide to the Galaxy",     author: "Douglas Adams",    gender: "male",     country: "UK",      genre: "Sci-Fi",        pages: 180, pubYear: 1979, format: "paperback",     dateStart: "2024-04-30", dateEnd: "2024-06-03", rating: "", status: "read", collection: false},
                {title: "The Wheel Spins",                          author: "Ethel Lina White", gender: "female",   country: "UK",      genre: "Crime",         pages: 255, pubYear: 1935, format: "paperback",     dateStart: "2024-03-10", dateEnd: "2024-03-24", rating: "", status: "read", collection: true},
                {title: "Becoming",                                 author: "Michelle Obama",   gender: "female",   country: "USA",     genre: "Memoir",        pages: 464, pubYear: 2021, format: "audiobook",     dateStart: "2024-02-18", dateEnd: "2024-02-28", rating: "", status: "read", collection: true},
                {title: "Star Trek: Bloodthirst",                   author: "J.M. Dillard",     gender: "female",   country: "USA",     genre: "Sci-Fi",        pages: 280, pubYear: 1987, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "Brisingr",                                 author: "Christopher Paolini", gender: "male",  country: "USA",     genre: "Fantasy",       pages: 748, pubYear: 2008, format: "audiobook",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "Like a Charm",                             author: "Kerry Barrett",    gender: "female",   country: "USA",     genre: "Fantasy",       pages: 214, pubYear: 2013, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "Uprooted",                                 author: "Naomi Novik",      gender: "female",   country: "USA",     genre: "Fantasy",       pages: 438, pubYear: 2015, format: "e-book",        dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: false},
                {title: "Ctrl, Alt; Delete: How I Grew Up Online",  author: "Emma Gannon",      gender: "female",   country: "UK",      genre: "Memoir",        pages: 272, pubYear: 2016, format: "e-book",        dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: false},
                {title: "Ironclads",                                author: "Adrian Tchaikovsky", gender: "male",   country: "UK",      genre: "Sci-Fi",        pages: 160, pubYear: 2017, format: "audiobook",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: false},
                {title: "Cinderella Is Dead",                       author: "Kalynn Bayron",    gender: "female",   country: "USA",     genre: "Fantasy",       pages: 400, pubYear: 2020, format: "e-book",        dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "Mixed Signals",                            author: "B.K. Borison",     gender: "female",   country: "USA",     genre: "Contemporary",  pages: 327, pubYear: 2022, format: "paperback",     dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true},
                {title: "The Hurricane Wars",                       author: "Thea Guanzon",     gender: "female",   country: "Phillipines", genre: "Fantasy",   pages: 478, pubYear: 2023, format: "hardback",      dateStart: "", dateEnd: "", rating: "", status: "tbr", collection: true}
            ]
        }
    }

    

}

//TEMPLATES:
// tbr in collection
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: false, tbr: true, read: false, collection: true},

// tbr unowned
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: false, tbr: true, read: false, collection: false},

// read in collection
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: false, tbr: false, read: true, collection: true},

// read unowned
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: false, tbr: false, read: true, collection: false},

// reading in collection
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: true, tbr: false, read: false, collection: true},

//reading unowned
// {title: "", author: "", gender: "", country: "", genre: "", pages: , pubYear: , format: "", dateStart: "", dateEnd: "", rating: "", reading: true, tbr: false, read: false, collection: false},