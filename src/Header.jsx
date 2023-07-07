import Footer from "./Components/Footer"

const Header = () => { 
    return(
        <div className="header">
        <h1 style={{color: "red"}}>Header</h1>  //inline css
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