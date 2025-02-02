import  Dashboard  from './components/Dashboard';
import  MainContent  from './components/MainContent';
import TodosProvider from './providers/TodosProvider';


function App() {

   
    return (
        <TodosProvider>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Dashboard></Dashboard>
                        <MainContent></MainContent>
                        
                    </div>
                </div>
            </div>
        </TodosProvider>
    )
}
 

export default App;