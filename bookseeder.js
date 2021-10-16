const Product = require('./model/books');
const mongoose = require('mongoose');

const local = "mongodb://localhost:27017/Books";
const url = "mongodb+srv://bhxshxn:bhxshxn@9@cluster0.ixoza.mongodb.net/Books?retryWrites=true&w=majority"
mongoose.connect(local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database is connected successfully on port 27017!!!');
});
const product = [
    new Product({
        title: "Mahabharata",
        author: "Vyasa",
        genre: "Mythology"
    }),
    new Product({
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    }),
    new Product({
        title: "The Godfather",
        author: "Mario Puzo",
        genre: "Mystery"
    }),
    new Product({
        title: "The Lord of the Rings",
        author: "JRR Tolkien",
        genre: "Sci-fi"
    }),
    new Product({
        title: "The Time Machine,",
        author: "HG Wells",
        genre: "Sci-fi"
    }),
    new Product({
        title: "Hell House",
        author: "Richard Matheson",
        genre: "Horror"
    }),
    new Product({
        title: "It",
        author: "Stephen King",
        genre: "Horror"
    }),
    new Product({
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        genre: "Horror"
    }),
    new Product({
        title: "Hyperion",
        author: "Dan Simmons",
        genre: "Sci-fi"
    }),
    new Product({
        title: "And Then There Were None",
        author: "Agatha Christie",
        genre: "Mystery"
    }),
    new Product({
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "Biography"
    }),
    new Product({
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genre: "Self-help"
    }),
    new Product({
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        genre: "Self-help"
    }),
    new Product({
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self-help"
    }),
    new Product({
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        genre: "Computer Science"
    }),
    new Product({
        title: "A Game of Thrones l",
        author: "George R. R. Martin",
        genre: "Fantasy"
    }),
    new Product({
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy"
    }),
    new Product({
        title: "Java: The Complete Reference",
        author: "Herbert Schildt",
        genre: "Computer Science"
    }),
    new Product({
        title: "Operating System Concepts",
        author: "Avi Silberschatz",
        genre: "Computer Science"
    }),
    new Product({
        title: "Wings of Fire",
        author: "Dr. APJ Abdul Kalam",
        genre: "Biography"
    }),
    new Product({
        title: "Long Walk to Freedom",
        author: "Nelson Mandela",
        genre: "Biography"
    })


];



var done = 0;
for (var i = 0; i < product.length; i++) {
    product[i].save((err, result) => {
        done++;
        if (done == product.length) {
            exit();
        }
    })
};
function exit() {
    mongoose.disconnect();
    console.log('done');
}