import Project from "../Project";
import projects from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio(props) {   

    return (

        <>
            {/*Loop through and map the projects array to extract the properties required for the portfolio gallery*/}
            {projects.map((project) => {
                return <Project
                title={project.title}
                image={project.image}
                description={project.description}
                url={project.url}            
            />
            })}
            
        </>

        
    )

}

export default Portfolio;