const Technology = (req,res) => {
res.send( [
    {
        bollyhead:"Hondanavi System",
        bollydesc:"This file contains additional information, probably added from the digital camera or scanner used to create or digitize it.",
        bollytags:['17:50/ 6 June 2009'],
        // bollyimg:require("../Images/Tech1.jpg")
    },
    {   
        bollyhead:"Best Programming",
        bollydesc:"Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
        bollytags:['20 Aug 2013'],
        // bollyimg:require('../Images/Tech3.jpg')
    },
    {
        bollyhead:"Digital Art",
        bollydesc:"Digital art refers to as any artistic work or practice that uses digital technology as part of the creative or presentation process.",
        bollytags:['Feb 15 2020'],
        // bollyimg:require('../Images/dg.jpg')
    },
    {
        bollyhead:"Semiconductor Device",
        bollydesc:"Semiconductor device fabrication is the process used to manufacture semiconductor devices, as NAND flash and DRAM.",
        bollytags:['Mar 23 2022'],
        // bollyimg:require('../Images/Tech2.jpg')
    },
    {
        bollyhead:"Coding",
        bollydesc:"Programmer writing program code with two monitors hacker programming developing software applications in the office. ",
        bollytags:['Jan 20 2022'],
        // bollyimg:require('../Images/Tech4.jpg')
    },
    {
        bollyhead:"Artificial Intelligence",
        bollydesc:"AI Assets to Market Faster by Streamlining the Model Training And Deployment Process.  Schedule Time with Sales.",
        bollytags:['Oct 24 1995'],
        // bollyimg:require('../Images/Ai.jpg')
    }
])
}

module.exports.TechnologyData=Technology;
