import {Link} from "react-router-dom";
import Header from "../components/Header";
import "./Pages.css"

export default function Details () {
    return <section className="page-layout">
        <Header />
        <section>
            <h1>Hier stehen details</h1>
            <Link to="/">Home</Link>
        </section>

    </section>
}