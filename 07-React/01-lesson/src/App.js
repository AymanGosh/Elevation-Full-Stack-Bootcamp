import logo from './logo.svg';
import './App.css';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  const showCompany = (name, revenue) => {
    return <div key={name} id={name}>{name} makes {revenue} every year</div>
   }
   const getClassName = (temperature) => { 
    let className;
    if(temperature<15){
      className="freezing";
    }else if(15<=temperature && temperature<=30){
      className="fair";
    }else{
      className="hell-scape";
    }
    return <div id="weatherBox" className={className}>{temperature}</div>
   }
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c=>{return showCompany(c.name,c.revenue)}) }
      </div>
      <div className="exercise" id="ex-2">
        {getClassName(31)}
      </div>
    </div>
  )
}
export default App;
