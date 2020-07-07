class Product
{
    fakeDB = [];

    constructor()
    {
        this.fakeDB.push({        
            imgPath : "p1.jpg",
            description : "Chinese Meal",
            price : "$111"
        });

        this.fakeDB.push({        
            imgPath : "p2.jpg",
            description : "Korean Meal",
            price : "$92"
        });

        this.fakeDB.push({        
            imgPath : "p3.jpg",
            description : "Chips Meal",
            price : "$82"
        });

        this.fakeDB.push({        
            imgPath : "p4.jpg",
            description : "Fries and steak",
            price : "$134"
        });
    }

    getAllProducts()
    {
        return this.fakeDB;
    }


    getFeatureProducts()
    {

    }



}

module.exports = Product;