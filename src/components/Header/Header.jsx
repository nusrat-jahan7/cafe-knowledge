import profile from "../../assets/images/profile.png"

const Header = () => {
    
    return (
        <div className="flex items-center justify-between container mx-auto mt-6 border-b-2 pb-2">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;