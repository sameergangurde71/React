## url :- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json 

# Input Box
```
function InputBox({
    label,
    
    className = "",
}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}
```

export default InputBox;
