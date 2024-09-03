import useHttpData from "./hooks/useHttpData.ts";

type User = {
    id: string;
    name: string;
};


function App() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const {data, loading, error }  = useHttpData<User>(url)
    
    if (loading) {
        return <p>Loading...</p>
    }
    if (error && !loading) {
        return <p>Error: {error}</p>
    }

    return <ul>
        {data.map(u => <li key={(u.id)}>{u.name }</li>)}
    </ul>
 }

export default App;