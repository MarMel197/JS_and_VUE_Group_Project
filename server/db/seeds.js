use foods;
db.dropDatabase();

db.menus.insertMany([
    {
    name: "Yorkshire pudding",
    description: "A common English side dish, a baked pudding made from a batter of eggs, flour, and milk or water.",
    key_ingredients: "Eggs, Flour, and Milk or Water",
    origin: "Originated in northern England",
    region: "North",
    image_url: "https://media.gettyimages.com/photos/freshly-baked-yorkshire-puddings-picture-id172752978?k=6&m=172752978&s=612x612&w=0&h=zPoKjQi8wTbp8QL-HpeTET0NT6e95hCh2BCoS82KIbU=",
    map_url: "cccc"
    }

]);