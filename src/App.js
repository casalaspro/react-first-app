import FirstComponent from "./FirstComponent";
import Product from "./Product";
import persons from "./persons";



function App() {
  const names = ["Tazio", "Robert", "Andrew", "Vincent"];
  const nweNames = names.map((name) => {
    return <h2>{ name }</h2>
  })
  return (
    <div className="App m-3">
      <header className="App-header">
        <section className="cards d-flex justify-content-around">
          {/* {names.map((name)=>{
            return <h2 className="col-3">{name}</h2>
          })} */}
          {/* <Product {...persons[0]}/> */}
          
          {persons.map((person)=>{
            const {id} = person;
            return <Product key={id} {...person} />
          })}
        </section>
      </header>
    </div>
  );
}

export default App;
