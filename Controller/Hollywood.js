const Hollywood = (req,res) => {
res.send([
    {
        bollyhead:"Dwayne Johnson",
        bollydesc:" Johnson was born on 2nd May 1972 in Hayward, California. His parents are Rocky Johnson and Ata Johnson.",
        bollytags:['2nd May 1972'],
        // bollyimg:require('../Images/johnson.jpg')
    },
    {   
        bollyhead:"Nicholas Hoult",
        bollydesc:"Nicholas Caradoc Hoult is an English actor. Hoult made his feature-film debut as a child artist in Intimate Relations.",
        bollytags:['7th December 1989'],
        // bollyimg:require('../Images/nic.jpg')
    },
    {
        bollyhead:"Vin Diesel",
        bollydesc:"Mark Sinclair, known professionally as Vin Diesel, is an American actor and filmmaker.",
        bollytags:['18th July 1967'],
        // bollyimg:require('../Images/vin.jpg')
    },
    {
        bollyhead:"Robert Downey Jr.",
        bollydesc:"Robert John Downey Jr. is an American actor and producer. He made his debut in 1970 as a child actor in the film Pound. He is best known for his work as Iron Man in the Iron Man and Avengers Franchise.",
        bollytags:['4th April 1965'],
        // bollyimg:require('../Images/Robert.jpg')
    },
    {
        bollyhead:"Chris Hemsworth",
        bollydesc:"Christopher Hemsworth is the full name of Chris Hemsworth, is an Australian Actor. Chris Hemsworth was born on 11 August 1983 in Melbourne, Victoria, Australia.. ",
        bollytags:['11 August 1983'],
        // bollyimg:require('../Images/chris.jpg')
    },
    {
        bollyhead:"Leonardo DiCaprio",
        bollydesc:"Hollywood Male Actor Leonardo DiCaprio was born on 11 November 1974 to George DiCaprio. He is one stepbrother Adam Farrar.",
        bollytags:['11 November 1974'],
        // bollyimg:require('../Images/leo.jpg')
    }
])
}
module.exports.HollywoodData=Hollywood;
