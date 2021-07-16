import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
         <section 
            className="error" 
            style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             flexDirection: "column",
             marginTop: "300px",
        }}>
            <h1>Error 404. Page Not Found</h1><br></br>
            <Link
            to="/"
            style={{ backgroundColor: "#00b392",
                padding: 10,
                color: "white" }}
            >
                Homepage
            </Link>
         </section>
        </>
    )
}

export default Error
