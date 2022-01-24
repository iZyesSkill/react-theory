// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

const Car = (cars) => {
    return (
        <div>
            {/* <p>This is car component</p>
            <p>{ 1 + 1 }</p>
            <p>Number: <strong>{ Math.round(Math.random() * 100) }</strong></p> */}

            <p>Car name: <strong>{cars.name}</strong></p>
            {cars.children}
            <p>Car year: <strong>{cars.year}</strong></p>
        </div>
    )
}
    

export default Car