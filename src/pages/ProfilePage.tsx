import { useParams } from "react-router-dom";

export default function HomePage() {
const params = useParams<{profileId: string}>();

    return (
        <>
            <div>
            <h1>PROFILE PAGE {params.profileId}</h1>
            </div>
        </>
    );
}