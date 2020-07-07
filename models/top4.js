class Top
{
    TopDB = [];


    constructor()
    {
        this.TopDB.push({        
            imgPath : "t1.jpg",
            description : "Pan-fried Salmon Steak",
            price : "$11.40"
        });

        this.TopDB.push({        
            imgPath : "t2.jpg",
            description : "Fried rice cake",
            price : "$14"
        });

        this.TopDB.push({        
            imgPath : "t3.jpg",
            description : "Toast with egg",
            price : "$9.40"
        });

        this.TopDB.push({        
            imgPath : "t4.jpg",
            description : "Susi",
            price : "$22"
        });

    }


    
    getAllTop(){
        return this.TopDB;
    }


}

module.exports = Top;



