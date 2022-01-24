// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

const Car = () => {
    return (
        <div>
            <p>This is car component</p>
            <p>{ 1 + 1 }</p>
            <p>Number: <strong>{ Math.round(Math.random() * 100) }</strong></p>
        </div>
    )
}
    

export default Car