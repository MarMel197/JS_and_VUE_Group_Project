use foods;
db.dropDatabase();

db.menus.insertMany([
// England
    {
    name: "Barm Cake",
    description: "A barm cake is a soft, round, flattish bread roll from North West England, traditionally leavened with barm. Chips are a popular filling, sold in most fish and chip shops in the North West of England and often called a chip barm.",
    origin: "North West England",
    region: "gb-eng",
    image_url: "https://www.tigersheds.com/thehiphorticulturist/wp-content/uploads/P3-Barm-Cakes.jpg"
    },
    {
    name: "Scouse",
    description: "Scouse is a type of stew, typically made from chunks of meat, usually beef or lamb, potatoes and onion. It is particularly associated with the port of Liverpool, which is why the inhabitants of that city are often referred to as Scousers.",
    origin: "North West England",
    region: "gb-eng",
    image_url: "https://i.guim.co.uk/img/media/e2983528c8dec3a4909a7c412d4acaebc744d201/0_1051_8550_5128/master/8550.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2411f24be3d512c7bf3a909b8e4b87a3"
    },
    {
    name: "Craster Kippers",
    description: "Craster kippers are kippers from the Northumberland village of Craster. They have been acclaimed as the best British kipper.",
    origin: "North East England",
    region: "gb-eng",
    image_url: "https://munchies-images.vice.com/wp_upload/kippers-smokehouse-northumberland.jpg?crop=1xw:1xh;center,center"
    },
    {
    name: "Yorkshire Pudding",
    description: "Yorkshire pudding is a common English side dish, a baked pudding made from a batter of eggs, flour, and milk or water.",
    origin: "Central England",
    region: "gb-eng",
    image_url: "https://www.seriouseats.com/recipes/images/2015/12/20151202-popover-yorkshire-pudding-food-lab-recipe-kenji-22.jpg"
    },
    {
    name: "Melton Mobray Pork Pie",
    description: "A pork pie is a traditional English meat pie, served either at room temperature or cold. It consists of a filling of roughly chopped pork and pork fat, surrounded by a layer of jellied pork stock in a hot water crust pastry. It is normally eaten as a snack or with a salad.",
    origin: "Central England",
    region: "gb-eng",
    image_url: "https://i.guim.co.uk/img/media/fc7b1406390faf54de4b02c2c516a76208dbe336/384_444_3374_2025/master/3374.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67bd22bb4a1a66ebc0bb3bc8964998e5"
    },
    {
    name: "Poor Knights of Windsor",
    description: "Poor Knights of Windsor is a dish that is very similar to French Toast. Unlike French Toast, however, in making Poor Knights of Windsor you don’t mix the eggs and milk together.",
    origin: "South England",
    region: "gb-eng",
    image_url: "https://1.bp.blogspot.com/-Uk8jxyvf-1M/TnY3aF-q2pI/AAAAAAAAAlo/A3TbYf64u1I/s1600/P9184712.JPG"
    },
    {
    name: "Jellied Eels",
    description: "Jellied eels are a traditional English dish that originated in the 18th century, primarily in the East End of London. The dish consists of chopped eels boiled in a spiced stock that is allowed to cool and set, forming a jelly. It is eaten cold.",
    origin: "London, England",
    region: "gb-eng",
    image_url: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F06%2Fjellied-eels-bowl-fwx-2000.jpg"
    },
// Scotland
    {
    name: "Cullen Skink",
    description: "Cullen skink, one of Scotland's most famous dishes, is a hearty soup that is traditionally made with smoked haddock. The name of this soup comes from Cullen, a small town in the northeast of Scotland.",
    origin: "Scottish Highlands",
    region: "gb-sct",
    image_url: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2013/12/cullen-skink-recipe-burns-night.jpg"
    },
    {
    name: "Clootie Dumpling",
    description: "Clootie dumpling is a Scottish colloquialism and gets its name from the cloth it is boiled in, cloot being Scots for cloth. Clootie dumpling follows the same tradition of hiding lucky charms inside a Christmas pudding.",
    origin: "Scottish Highlands",
    region: "gb-sct",
    image_url: "https://www.thespruceeats.com/thmb/MPdSJKJVPNRuzeY_0h523z2QT4U=/2297x1292/smart/filters:no_upscale()/traditional-clootie-dumpling-recipe-435684-hero_01-9a776b4c5dbf4f37ab5add895c23db6c.jpg"
    },
    {
    name: "Stovies",
    description: "Stovies is a Scottish dish based on potatoes. Recipes and ingredients vary widely but the dish contains potatoes, fat, onions and often pieces of meat. In some versions, other vegetables may also be added.",
    origin: "Scottish Highlands",
    region: "gb-sct",
    image_url: "https://www.cookipedia.co.uk/wiki/images/2/26/Scottish_sausage_stovies_GF_recipe.jpg"
    },
    {
    name: "Cock-a-leekie-soup",
    description: "Cock-a-leekie soup is a Scottish soup dish consisting of leeks and peppered chicken stock, often thickened with rice, or sometimes barley. The original recipe added prunes during cooking, and traditionalists still garnish with a julienne of prunes.",
    origin: "`Scottish Highlands",
    region: "gb-sct",
    image_url: "https://i2.wp.com/carolinescooking.com/wp-content/uploads/2019/12/cock-a-leekie-soup-photo.jpg"
    },
    {
    name: "Cranachan",
    description: "Cranachan is a traditional Scottish dessert. It was originally a celebration of harvest, made following the raspberry harvest in June. The dessert of cream and fresh seasonal raspberries is bolstered by Scottish oats and whisky. It has been called 'the uncontested king of Scottish dessert'",
    origin: "Scottish Lowlands",
    region: "gb-sct",
    image_url: "https://www.seriouseats.com/2018/01/20180116-cranachan-vicky-wasik-1-3-1500x1125.jpg"
    },
    {
    name: "Crowdie",
    description: " One of Scotland's oldest cheeses, and the natural accompaniment to a pre-ceildh whisky, crowdie is a half-fat curd cheese made by Connage Dairies. The traditional recipe produces a soft, creamy cheese with a mousse-like texture, a fresh zesty aroma and a slightly sour aftertaste",
    origin: "Scottish Lowlands",
    region: "gb-sct",
    image_url: "https://fromagehomage.files.wordpress.com/2017/01/dscf0885.jpg"
    },
    {
    name: "Haggis",
    description: "Haggis is a savoury pudding containing sheep's pluck, minced with onion, oatmeal, suet, spices, and salt, mixed with stock, and cooked while traditionally encased in the animal's stomach though now often in an artificial casing instead.",
    origin: "Scotland",
    region: "gb-sct",
    image_url: "https://www.sportaberdeen.co.uk/wp-content/uploads/2019/01/getimage-1.jpg"
    },
// Wales
    {
    name: "Welsh Rarebit",
    description: "Welsh rabbit or Welsh rarebit is a dish consisting of a hot cheese-based sauce served over slices of toasted bread. The original 18th-century name of the dish was the jocular Welsh rabbit, which was later reinterpreted as rarebit, as the dish contains no rabbit. ",
    origin: "Wales",
    region: "gb-wls",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Welsh_rarebit.JPG"
    },
    {
    name: "Bara Brith",
    description: "Bara brith or speckled bread, is a bread enriched with dried fruit and either made with yeast or with self-raising flour. It is traditionally flavoured with tea, dried fruits and mixed spices, and is served sliced and buttered at tea time.",
    origin: "Wales",
    region: "gb-wls",
    image_url: "https://images.squarespace-cdn.com/content/v1/58ab3a791b10e3ab0b4d435b/1488019324809-NIU76E4YIWRKG17MEBQN/ke17ZwdGBToddI8pDm48kI78yYvnXTDPl3oE4c11wA97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UedDyQZjAMhgZCmy-GJUzD7vqz1K6zovLnlfBs5_S5kr1I8jw7uor-MYYgI1_Vf-pA/160510_crosbies34799.jpg?format=2500w"
    },
    {
    name: "Crempog",
    description: "Crempog is a Welsh pancake made with flour, buttermilk, eggs, vinegar and salted butter. Traditionally made on bakestones or griddles, crempog is one of the oldest recipes in Wales. They are also known as ffroes, pancos and cramoth and are normally served thickly piled into a stack and spread with butter",
    origin: "Wales",
    region: "gb-wls",
    image_url: "https://www.thespruceeats.com/thmb/hUjaphWAc4QcvKFQNaYX3c-BQZI=/2121x1414/filters:fill(auto,1)/GettyImages-823619676-e1e63f5789164d65955e5e262eb1a610.jpg"
    },
    {
    name: "Laverbread",
    description: "Laverbread is a food product, made from an edible seaweed, consumed mainly in Wales as part of local traditional cuisine. The seaweed is commonly found around the west coast of Great Britain and east coast of Ireland along the Irish Sea, where it is known as slake.",
    origin: "Wales",
    region: "gb-wls",
    image_url: "https://www.telegraph.co.uk/content/dam/onlyinbritain/british-food-laverbread.jpg"
    },
    {
    name: "Monmouth Pudding",
    description: "A Monmouth Pudding is said to consist of layers of meringue, jam or seasonal fruit, and bread soaked in milk, whilst Manchester Pudding is similar but contains egg yolks (but some have speculated that this name was just a synonym for the Queen of Puddings).",
    origin: "Wales",
    region: "gb-wls",
    image_url: "https://www.thyme.co.uk/assets/thyme/content/images/1920x1280_Monmouth-Pudding1.jpg"
    },

// Northern Ireland
{
    name: "Cavan Cola",
    description: "Cavan Cola was a brand of soft drink produced by Cavan Mineral Water Ltd. in the town of Cavan, Ireland. It was introduced in 1958, and was sold in 250 ml and 710 ml bottles in shops in counties Cavan, Monaghan, Sligo, Leitrim, Louth, Donegal and Meath",
    origin: "Northern Ireland",
    region: "gb-nir",
    image_url: "https://imengine.public.prod.cmg.infomaker.io/?uuid=d079f0cd-9b60-5f68-90df-850fdb21aa30&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0"
    },
    {
    name: "Fadge",
    description: "Potato bread is a form of bread in which potato flour or potato replaces a portion of the regular wheat flour. It is cooked in a variety of ways, including baking it on a hot griddle or pan, or in an oven. It may be leavened or unleavened, and may have a variety of other ingredients baked into it",
    origin: "Northern Ireland",
    region: "gb-nir",
    image_url: "https://eclecticepicurean.com/Pictures/lrish/Traditional%20Irish%20Fadge.jpg"
    },
    {
    name: "Champ",
    description: "Champ is made by combining mashed potatoes and chopped scallions with butter, milk and optionally, salt and pepper.It was sometimes made with stinging nettle rather than scallions. In some areas the dish is also called poundies.",
    origin: "Northern Ireland",
    region: "gb-nir",
    image_url: "https://media1.s-nbcnews.com/i/newscms/2018_11/1325222/irish-champ_-today-180316-tease-01_4157f01d87cac1fbaa791322e71ae788.jpg"
    }
]);