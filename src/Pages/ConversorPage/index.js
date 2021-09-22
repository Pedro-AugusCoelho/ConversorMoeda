import React, {useState , useEffect} from "react";
import { Main } from "./styled";

export default function ConversorPage(){

  const [moedaUSD , setMoedaUSD ] = useState(0);
  const [moedaBRL , setMoedaBRL ] = useState(0);
  const [cotNow , setCotNow] = useState();
  /*const [codeSelect , setCodeSelect] = useState('USD');
  const [code , setcode ] = useState(
    [
      {name:'USD'},
      {name:'ETH'},
      {name:'CAD'},
      {name:'GBP'},
      {name:'ARS'},
      {name:'BTC'},
      {name:'LTC'},
    ]
  )*/
  
  useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`, {
      method:'GET'
    }).then(function(response){
      return response.json();
    }).then(function(resConMoney){
      let highMoney =  parseFloat(resConMoney.USDBRL.high);
      let lowMoney  =  parseFloat(resConMoney.USDBRL.low);
      averageQuote(highMoney , lowMoney);
  });
  },[moedaBRL]);

  function averageQuote(x , y){
    console.log(x);
    console.log(y);
    const MoneyAv = parseFloat((x + y)) / 2;
    setCotNow(parseFloat(MoneyAv.toFixed(2)));
  }
  
  function handleConverter(){
    let ResulMoeda = moedaUSD * cotNow;
    setMoedaBRL(ResulMoeda.toFixed(2));
  }



  return(
    <>
      <Main>

        <div className='title'><h1>CONVERSOR</h1></div>
        
        <div className='ContainerBox'>
            <div className='box'>
              <h2>USD</h2>  
              <input 
              type='number' 
              placeholder='$' 
              value={moedaUSD} 
              onChange={(e) => setMoedaUSD(e.target.value)}
              />
            </div>


            <div className='box'>
              <h2>BRL</h2>
              <input 
              type='number' 
              placeholder='R$'
              value={(moedaBRL)} 
              onChange={(e) => setMoedaBRL(e.target.value)} 
              disabled />
            </div>

            <div className='box'>
              <input 
              type='button'
              value='Conversor'
              onClick={handleConverter}
              />
            </div>
        </div>
      
      
      </Main>
    </>
  )
}