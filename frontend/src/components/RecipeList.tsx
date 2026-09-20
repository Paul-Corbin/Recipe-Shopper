import RecipeThumb from '../components/RecipeThumb.tsx'

const RecipeList = (props: { recipes: any; }) => {
    const { recipes } = props;
    return (
        <div className = "recipe-list" style={{alignItems: "center"}}>
            {recipes.map((Recipe: { footer: string | undefined; img: string | undefined; description: string | undefined; name: string | undefined;}) => (RecipeThumb(Recipe)))}
        </div>)
}
export default RecipeList