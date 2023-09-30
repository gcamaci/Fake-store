import GenreNav from "./navigation/GenreNav"

const Nav = () => {
    return(
        <div className="fixed top-[10vh] w-[250px] flex justify-center col-start-1 col-end-3 h-[90vh] text-primary">
            <GenreNav />
        </div>
    )
}

export default Nav