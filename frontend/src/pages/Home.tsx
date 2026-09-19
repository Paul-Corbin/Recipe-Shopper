import RecipeList from '../components/RecipeList.tsx'
interface Recipe {
    id: string;
    description: string;
    img: string;
}
const Home = () => {
    //Stand-in for API call
    const recipes: Recipe[] = [
        {
            id: "1",
            description: "Chicken Alfredo",
            img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-1-horizontal_e45173-crop"
        }
    ]
    return (
        <div className="background">
            <div className={"row"}>
                <RecipeList recipes={recipes} />
            </div>
        </div>
    )
}
export default Home;