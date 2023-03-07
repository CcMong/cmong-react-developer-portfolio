import Project from "../Project";
import projects from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {   

    return (

        <div className="container">
            <h2 id="portfolio">My Portfolio</h2>
            <div className="row">
                {/*Loop through and map the projects array to extract the properties required for the portfolio gallery*/}
                {projects.map((project) => {
                    return <Project
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    url={project.url}            
                />
                })}
            </div>
        </div>        
    )
}

export default Portfolio;