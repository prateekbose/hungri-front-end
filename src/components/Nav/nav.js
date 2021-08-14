export default function NavBar({setPage}){
    return (
        <nav>
            <h1>hungri</h1>
            <div>
                <button className="btn btn-alt" onClick={() => setPage("Requests")}>Requests</button>
                <button className="btn" onClick={() => setPage("Donate")}>Donate</button>
            </div>
        </nav>
    )
}