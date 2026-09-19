import RecipeThumb from '../components/RecipeThumb.tsx'

const RecipeList = (props: { recipes: any; }) => {
    const { recipes } = props;
    return (
        <div className = "recipe-list">
            {recipes.map((recipe: { img: string | undefined; description: string | undefined; }) => (RecipeThumb(recipe)))}
        </div>)
}
export default RecipeList