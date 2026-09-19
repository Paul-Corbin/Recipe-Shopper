import '../styles/recipe-thumb.css'
const RecipeThumb = (props: { img: string | undefined; description: string | undefined; }) => {
    return (<button className = "recipe-thumb">
        <img src = {props.img} alt = {props.description} />
    </button>)
}
export default RecipeThumb;