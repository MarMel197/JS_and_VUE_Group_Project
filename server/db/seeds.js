use foods;
db.dropDatabase();

db.menus.insertMany([
    {
    name: "Yorkshire pudding",
    description: "A common English side dish, a baked pudding made from a batter of eggs, flour, and milk or water.",
    key_ingredients: "Eggs, Flour, and Milk or Water",
    origin: "Originated in northern England",
    region: "gb-eng",
    image_url: "https://media.gettyimages.com/photos/freshly-baked-yorkshire-puddings-picture-id172752978?k=6&m=172752978&s=612x612&w=0&h=zPoKjQi8wTbp8QL-HpeTET0NT6e95hCh2BCoS82KIbU=",
    map_url: "cccc"
    },
    {
    name: "Haggis",
    description: "A type of pudding composed of sheep internals liver, heart, and lungs of a sheep (or other animal).",
    key_ingredients: "Sheep liver & heart, beef or mutton suet and oatmeal and seasoned with onion.",
    origin: "May have been imported from Scandinavia by the Vikings.",
    region: "gb-sct",
    image_url: "https://cdn.britannica.com/s:700x500/32/188132-050-E4D1C04E/Haggis.jpg",
    map_url: "ddd"  
    },
    {
    name: "Brambrack Bread",
    description: "A a quick bread with added sultanas and raisins..",
    key_ingredients: "Mixed dried fruit, black te, plain flour, butter, eggs, sugar",
    origin: "Originated in brambrack.",
    region: "gb-nir",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Barmbrack.jpg",
    map_url: "eee" 
    },
    {
    name: "Cornish Pasties",
    description: "A a quick bread with added sultanas and raisins..",
    key_ingredients: "beef skirt, potato, swede (turnip) and onion",
    origin: "Originated in in South West England.",
    region: "gb-eng",
    image_url: "https://www.thespruceeats.com/thmb/VePbSFe-byPmYO63146dq64OT0M=/2932x1955/filters:fill(auto,1)/82738399-58adae853df78c345bb55cce.jpg",
    map_url: "ffff" 
    },
    {
    name: "Jellied Eel",
    description: "Chopped eels boiled in a spiced stock that is allowed to cool and set, forming a jelly.",
    key_ingredients: "Eel and spiced stock",
    origin: "Originated in the 18th century, primarily in the East End of London..",
    region: "gb-eng",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Eels_1385.JPG/1200px-Eels_1385.JPG",
    map_url: "hhhh" 
    },
    {
    name: "Cromer Crab",
    description: "Crabs with chalk shelf and found in nutrient-rich waters. Tender, fragrant and well-meated with high proportion of white to brown meat.",
    key_ingredients: "well-salted water, seasoning, vegetables",
    origin: "Northern coast of Norfolk ",
    region: "gb-eng",
    image_url: "https://www.slowfood.org.uk/wp-content/uploads/2014/05/brownCrab-Pengellys-with-permission.jpg",
    map_url: "hhhh" 
    }

]);