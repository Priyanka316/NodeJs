const Food = (req,res) => {
res.send([
    {
        bollyhead:"Healthy meal",
        bollydesc:"As the lead Meals on Wheels contractor for the East Side of Manhattan from 59th Street to 142nd Street.",
        bollytags:['Mar 13 2022'],
        // bollyimg:require("../Images/fd7.jpg")
    },
    {   
        bollyhead:"Healty Vegitables",
        bollydesc:"Celevida is scientifically designed to help minimize blood sugar spikes from Day 1.",
        bollytags:['Mar 27 2022'],
        // bollyimg:require('../Images/fd2.jpg')
    },
    {
        bollyhead:"Vegitarian",
        bollydesc:"To get the most out of a vegetarian diet, choose a variety of healthy plant-based foods.",
        bollytags:['Feb 15 2020'],
        // bollyimg:require('../Images/fd3.jpg')
    },
    {
        bollyhead:"Non-Vegitarian",
        bollydesc:"A non-vegetarian diet includes chicken, meat, eggs and fish. ",
        bollytags:['Mar 23 2022'],
        // bollyimg:require('../Images/fd4.jpg')
    },
    {
        bollyhead:"Healty Snacks",
        bollydesc:"Hummus is a traditional Mediterranean dish that people make from pureed chickpeas...,  Celery sticks and nut butter.",
        bollytags:['Jan 20 2022'],
        // bollyimg:require('../Images/fd5.jpg')
    },
    {
        bollyhead:"Healty Drinks",
        bollydesc:"Water is the best choice for quenching your thirst. Coffee and tea, without added sweeteners, are healthy choices, too.",
        bollytags:['Jan 14 2017'],
        // bollyimg:require('../Images/fd6.jpg')
    }

])
}
module.exports.FoodData=Food;
