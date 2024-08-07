import Dropdown from './Dropdown';

const items =["Yes", "Probably not"];

function App() {
  return (
    <div style={{margin:'5% 30%',padding:'5%',textAlign:'center', backgroundColor:'aquamarine'}}>
      
      <Dropdown items={items} />
    </div>
  );
}

export default App;
