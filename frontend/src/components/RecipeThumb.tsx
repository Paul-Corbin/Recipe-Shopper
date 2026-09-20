import '../styles/recipe-thumb.css'
const RecipeThumb = (props: { footer: string | undefined; img: string | undefined; description: string | undefined; name: string | undefined;}) => {
    return (
        <button className = "recipe-thumb">
            <div className="wrapper">
                <img src = {props.img} alt = {props.name} />
                <h1 className="name">{props.name}</h1>
                <div className="overlay">
                    <p className="description">{props.description}</p>
                    <p className="footer">{props.footer}</p>
                </div>
            </div>
        </button>
    )
}
export default RecipeThumb;