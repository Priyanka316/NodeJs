const Home = (req,res) => {
res.send
(
    [{

        id:1,
        header:"Singapore At Night",
        description:"Singapore is a sunny, tropical island in South-east Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited by five million people from four major communities; Chinese (majority), Malay, Indian and Eurasian.",
        tags:['April 15 2022'],
        // background:require("../Images/sing1.jpg")
    },

    {
        id:2,
        header:"Mumbai City",
        description:"Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city. It is also the wealthiest city in India, and has the highest number of millionaires and billionaires among all cities in India.",
        tags:['July 11 2020'],
        // background:require("../Images/mumbai.jpg")
    },

    {
        id:3,
        header:"Zurich Switzerland",
        description:"Zürich, largest city of Switzerland and capital of the canton of Zürich. Located in an Alpine setting at the northwestern end of Lake Zürich, this financial, cultural, and industrial centre stretches out between two forested chains of hills, about 40 miles (60 km) from the northern foothills of the Alps.",
        tags:['October 17 2020'],
        // background:require("../Images/switzer.jpg")

    },//


    {
        headding:" Mysore Palace",
        brief:"The Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house).",
        data:['Jan 22 2022'],
        // backimg:require("../Images/mysore.jpg")
    },
    {
        headding:" Jaipur Palace",
        brief:"The Palace was also the location of religious and cultural events, as well as a patron of arts, commerce, and industry.",
        data:['Jan 22 2022'],
        // backimg:require('../Images/jaipur.jpg')
    },
    {
        headding:" Royal Palace",
        brief:"The Royal Palace is owned by the state and placed at the disposal of the head of state. ",
        data:['Jan 22 2022'],
        // backimg:require("../Images/Royal.jpg")
    },
    {
        headding:" Rajendra Pole Palace",
        brief:"The palace was the royal residence of the maharaja of Jammu and Kashmir from the Dogra dynasty.",
        data:['Jan 22 2022'],
        // backimg:require("../Images/Pole.jpg")
    },//

    {
        number:"2",
        toptext:"Choose only one master - Nature ",
        midtext:[],
        // textimg:require("../Images/img1.jpg")
    },
    {
        number:"3",
        toptext:"Choose only one master - Nature",
        midtext:[],
        // textimg:require("../Images/img1.jpg")
    },
    {
        number:"4",
        toptext:"Choose only one master - Nature",
        midtext:[],
        // textimg:require("../Images/img1.jpg")
    },//


    {
        titlehead:" Burj Kjalifa Dubai redirects",
        deschead:"Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament.",
        taghead:["April 15 2017"]
    },
    {
        titlehead:"Sydney Opera House",
        deschead:"The Sydney Opera House constitutes a masterpiece of 20th century architecture. Its significance is based on its unparalleled design and construction; its exceptional engineering achievements and technological innovation and its position as a world-famous icon of architecture.",
        taghead:["April 15 2017"]
    },
    {
        titlehead:"Attractions Of America",
        deschead:"As one of the largest and most diverse countries in the world, The United States boast an amazing amount of tourist destinations ranging from the skyscrapers of New York and Chicago, the natural wonders of Yellowstone and Alaska to the sunny beaches of California, Florida and Hawaii.",
        taghead:["April 15 2017"]
    },//
    


])
}

module.exports.HomeData=Home;

