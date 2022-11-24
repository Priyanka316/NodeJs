const Bollywood = (req,res) => {
res.send(
    [
    {
        bollyhead:"Award 2022",
        bollydesc:"Filmfare is considered one of the most prestigious awards in Bollywood. Members of Bollywood fraternity dreams of winning the Black Lady. ",
        bollytags:['Mar 13 2022'],
        // bollyimg:require("../Images/award2022.jpg")
    },
    {   
        bollyhead:"Award 2022",
        bollydesc:"The BollywoodLife.com Awards 2022 is the first and one of its kind digital-only awards based on online voting by the audience.",
        bollytags:['Mar 27 2022'],
        // bollyimg:require('../Images/award2021.jpg')
    },
    {
        bollyhead:"Award 2020",
        bollydesc:"The winners of the 68th National Film Awards were announced on July 22. The National Award for Best Actor Ajay Devgn for Tanhaji.",
        bollytags:['Feb 15 2020'],
        // bollyimg:require('../Images/award2020.jpg')
    },
    {
        bollyhead:"Award 2022",
        bollydesc:"The 64th Filmfare Awards ceremony, presented by The Times Group, honored the best Indian Hindi-language films of 2022.  ",
        bollytags:['Mar 23 2022'],
        // bollyimg:require('../Images/award2022.jpg')
    },
    {
        bollyhead:"Award 2022",
        bollydesc:"This year’s award season kickstarts with 63rd Jio Filmfare Awards 2022.   ",
        bollytags:['Jan 20 2022'],
        // bollyimg:require('../Images/award2022.jpg')
    },
    {
        bollyhead:"Award 2017",
        bollydesc:"The 2017 IIFA Awards, presented by the International Indian Film Academy honouring the best, New Jersey on 14–15 July 2017.",
        bollytags:['Jan 14 2017'],
        //bollyimg:require('../Images/award2017.jpg')
    }
])
}
module.exports.BollywoodData=Bollywood;
