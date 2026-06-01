import UserCard from "../components/UserCard";


const UserPage = async() => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    console.log(users);
    return (
        <div>
            <h2t className="text-blue-500 text-2xl font-bold">This is User Page</h2t>
            
            <div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }

            </div>

        </div>
    );
};

export default UserPage;