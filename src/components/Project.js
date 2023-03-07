import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Project({ title, image, description, url}) {

    return (
        <div className="cardContainer card-deck col-lg-4 col-md-4 col-sm-6">
            <div className="card">
                <img src={image} class="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Project;