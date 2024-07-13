import './App.css';
// import Card from './components/Card';
import Spacer from './components/Spacer';
// import { CardBody } from './components/Card';
import List from './components/List';


function App() {
    const list = ['Goku', 'Gohan', 'Radix'];

    const handleSelect = (el:string) => {
        console.log('mostrando desde 1', el);
        
    };
    const handleSelect2 = (el:string) => {
        console.log('imprimiendo desde 2', el);
        
    };
    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-12">
                    <Card>
                        <CardBody title="Hola" text="Text" />
                    </Card>
                </div> */}
                <div className="col-2">
                    <Spacer space={30} />
                    <List data={list}></List>
                    <Spacer space={30} />
                    <List data={list} onSelect={handleSelect}></List>
                    <Spacer space={'30px'} />
                    <List data={list} onSelect={handleSelect2}></List>
                </div>
            </div>
        </div>
    );
}

export default App;
