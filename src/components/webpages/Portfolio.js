import Project from "../Project";

function Portfolio() {

    const projectInfo = [

        {
            id: 1,
            title: "Project 1 Title",
            image: "",
            description: "Project 1 description"
        },
        {
            id: 2,
            title: "Project 2 Title",
            image: "",
            description: "Project 2 description"
        },
        {
            id: 3,
            title: "Project 3 Title",
            image: "",
            description: "Project 3 description"
        },
        {
            id: 4,
            title: "Project 4 Title",
            image: "",
            description: "Project 4 description"
        },
        {
            id: 5,
            title: "Project 5 Title",
            image: "",
            description: "Project 5 description"
        },
        {
            id: 6,
            title: "Project 6 Title",
            image: "",
            description: "Project 6 description"
        }
    ]

    return (

        <Project title={projectInfo[0].title} imgSrc={projectInfo[0].image} desc={projectInfo[0].description} />




    )


}

export default Portfolio;