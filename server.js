const express = require("express");
const exphbs = require("express-handlebars");
const Product = require("./models/data");
const Delivery = require("./models/home");
const Top = require("./models/top4");
const bodyParser = require('body-parser');

require('dotenv').config({path:"../config/keys.env"});

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
 
    const deliveryDB = new Delivery();
    const TopDB = new Top();
    res.render("index", {
        delivery: deliveryDB.getAllDelivery(),
        Menu: TopDB.getAllTop()
    })
});

// productlist 
app.get("/productlisting", (req, res) => {

    const productDB = new Product();
    res.render("productListing", {
        title: "productListing page",
        items: productDB.getAllProducts()
    })
});

// regisration
app.get("/regisration", (req, res) => {

    res.render("regisration", {
        title: "regisration page"
    })

});

// login
app.get("/login", (req, res) => {

    res.render("login", {
        title: "login page"
    })
});

app.get("/dashboard", (req, res) => {

    res.render("dashboard", {
        title: "dashboard"
    })
});
// 
app.post("/login", (req, res) => {
    const userError = [];
    const passError = [];
    
    if (req.body.userName == "") {
        userError.push("You must enter a username");
    }
    
    if (req.body.password == "") {
        passError.push("You must enter a password");
    }
    
    if (userError.length > 0 || passError.length > 0) {
        res.render("login", {
            title: "login page",
            userError: userError,
            passError: passError
        });
    } 
    
});



app.post("/regisration", (req, res) => {

    const fNameError = [];
    const lNameError = [];
    const passwordError = [];
    const emailError = [];

    if (req.body.firstName == "") {
        fNameError.push("Please enter your first name");
    }

    if (req.body.lastName == "") {
        lNameError.push("Please enter your Last name")
    }

    if (req.body.password == "" || req.body.password > 12 || req.body.password < 6 ) {
        passwordError.push("Please enter a password must be between 6 and 12 characters");
    }

    if (req.body.email == "") {
        emailError.push("please enter a valid email");
    }

    if (fNameError.length > 0 || lNameError.length > 0 || passwordError.length > 0 || emailError.length > 0 ) {
        res.render("regisration", {
            title: "regisration page",
            errorMessages1: fNameError,
            errorMessages2: lNameError,
            errorMessages4: passwordError, 
            errorMessages3: emailError
        });
    } else {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey("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");
        const msg = {
          to: `terry470343312@gmail.com`,
          from: 'terry470343312@gmail.com',
          subject: 'Regisration successful',
          html: `<strong>Hello, ${req.body.firstName} ${req.body.lastName}: </strong> <br>
          <p>We are happy to inform you that the registration is complete. Your username is ${req.body.email}. Thank you </p>`,
        };
        sgMail.send(msg)
        .then(()=>{
            res.redirect("/dashboard");
        })
        .catch(err=>{
            console.log(`Error: ${err}`);
        })
    }

});

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "dashboard"
    })
});

const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
    console.log("Website is up and running");
})