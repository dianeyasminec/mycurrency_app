import React, {useEffect} from 'react'

export default function CurrencyRow() {

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c91384c642mshaa6c8ff4bb3387cp1b6b4fjsnd6fee11c99cc',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        
        fetch('https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR&q=1.0', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    },[])
  



  return (
    <div className='text-lead'>
        <input
        type="number"
        className='input'/>
        <select>
            <option value="USD">$</option>
        </select>
    </div>
  )
}
