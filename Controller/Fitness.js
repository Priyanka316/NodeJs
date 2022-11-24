const Fitness = (req,res) => {
res.send([
    {
        bollyhead:"Anaerobic",
        bollydesc:"Anaerobic exercise features high-intensity movements performed in a short period of time. ",
        bollytags:['10 mins'],
        // bollyimg:require("../Images/aro.jpg")
    },
    {   
        bollyhead:"Lunges",
        bollydesc:"Challenging your balance is an essential part of a well-rounded exercise routine.",
        bollytags:['30 times'],
        // bollyimg:require('../Images/lunge.jpg')
    },
    {
        bollyhead:"Pushups",
        bollydesc:"Drop and give me 20! Pushups are one of the most basic yet effective bodyweight moves you can perform .",
        bollytags:['20 times'],
        // bollyimg:require('../Images/pushup.jpg')
    },
    {
        bollyhead:"Squats",
        bollydesc:"Squats increase lower body and core strength, as well as flexibility in your lower back and hips. ",
        bollytags:['20 times'],
        // bollyimg:require('../Images/squat.jpg')
    },
    {
        bollyhead:"Standing overhead dumbbell presses",
        bollydesc:"Compound exercises, which utilize multiple joints and muscles, are perfect.",
        bollytags:['20 times'],
        // bollyimg:require('../Images/stnd.jpg')
    },
    {
        bollyhead:"Side planks",
        bollydesc:"A healthy body requires a strong core at its foundation, so don’t neglect core-specific moves like the side plank. ",
        bollytags:['3 to 4 mins'],
        // bollyimg:require('../Images/sdplnk.jpg')
    }

])
}
module.exports.FitData=Fitness;
