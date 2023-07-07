import Footer from "./Components/Footer"

const Header = () => { 
    return(
        <div className="header">
        <h1>Header</h1>
        <p>Hello World</p>
        <Footer/>
        </div>
    )
}

const Mid = () => {
    return(
        <h1>Body</h1>
    )
} 


export default Mid;
export {Header};