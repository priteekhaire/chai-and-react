import { useState } from 'react'
import { Input } from './components'
import './App.css'
import useCurrencyInfo from './Hooks/UseCurrencyInfo'

function App() {
  const[amount,setAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap = () => {
  let tempFrom = from
  let tempAmount = amount
  setFrom(to)
  setTo(tempFrom)
  setAmount(convertedAmount)
  setConvertedAmount(tempAmount)
}


   const convert=()=>  {setConvertedAmount(amount*currencyInfo[to])}

 return (
    <div
        className="w-320 h-150 flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=3060&h=1150&dpr=2 w-full h-full')`,
        }}
    >
        <div className="w-full">
            <div className="w-320 h-50 flex justify-center items-center backdrop-blur-sm bg-black/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-b-blue-950 border-white rounded-md bg-amber-400 text-blue
                             px-2 py-0.5"
                            onClick={swap}>
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-amber-400 text-blue-800 px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
