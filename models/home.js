class Delivery
{

    homeDB = [];


    constructor()
    {
        this.homeDB.push({        
            imgPath : "1.gif",
            description : "Pick",
            price : "100 + menu of all-natural dishes."
        });

        this.homeDB.push({        
            imgPath : "2.gif",
            description : "Heat",
            price : "Cooked & delivered."
        });

        this.homeDB.push({        
            imgPath : "3.gif",
            description : "Eat",
            price : "Delicious & nutritious."
        });

        this.homeDB.push({        
            imgPath : "4.gif",
            description : "Repeat",
            price : "Skip a week or cancel any time."
        });
        
    }

    getAllDelivery()
    {   
        return this.homeDB;
    }


}

module.exports = Delivery;