const Menu = () => {
    function MenuButton(props: any) {
        return (<button {...props} on={props.onClick}><i className={props.icon}/></button>)
    }
    function Account() {
        function onClick(){
            console.log("Account clicked")
        }
        return (<MenuButton onClick={onClick} icon="bi bi-person-fill"/>);
    }
    function Favorites() {
        function onClick(){
            console.log("Favorites clicked")
        }
        return (<MenuButton onClick={onClick} icon="bi bi-star-fill"/>);
    }
    function Lists() {
        function onClick(){
            console.log("Lists clicked")
        }
        return (<MenuButton onClick={onClick} icon="bi bi-list-task"/>);
    }
    function Login() {
        function onClick(){
            console.log("Login clicked")
        }
        return (<MenuButton onClick={onClick} icon="bi bi-door-open-fill"/>);
    }
    return (
        <>
            <div className="menu">
                <Account/>
                <Favorites/>
                <Lists/>
                <Login/>
            </div>
        </>
    )
}
export default Menu;