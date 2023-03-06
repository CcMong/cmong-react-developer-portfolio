
function Project(props) {

    return (

        <div class="card" style="width: 18rem;">
            <img src={props.imgSrc} class="card-img-top" alt={props.title} />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <a href="google.com" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Project;