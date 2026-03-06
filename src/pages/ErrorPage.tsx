import BackButton from "../components/globals/BackButton";

export default function ErrorPage() {
    return <div>
        <h2>Error 404</h2>
        <p>this page is not found</p>
        <BackButton type="custom" link="/" label="back to start"/>
    </div>
}