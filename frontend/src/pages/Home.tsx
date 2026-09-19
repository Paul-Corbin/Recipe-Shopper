import RecipeList from '../components/RecipeList.tsx'
interface Recipe {
    id: string;
    name: string;
    description: string;
    footer: string;
    img: string;
}
const Home = () => {
    //Stand-in for API call
    const recipes: Recipe[] = [
        {
            id: "1",
            name: "Chicken Alfredo",
            description: "Creamy alfredo sauce, Fettuccine pasta, and grilled chicken.",
            img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-1-horizontal_e45173-crop",
            footer: "Prep time: 30 mins. Cook time: 30 mins."
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