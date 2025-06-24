import { useState } from 'react'

function MyComponent(){

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarsMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCars(){
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarsMake("")
        setCarModel("")
    }
    function handleRemoveCars(index){
        
    }
    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarsMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
    <>
        <div>
            <h2>List of cars Objects</h2>
            <ul>
                {cars.map((car,index) => <li key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} /> <br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter your Manufacturer'/> <br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter your Model' /> <br/>
            <button onClick={handleAddCars}>Add car</button>
        </div>
    </>
    )
}

export default MyComponent

