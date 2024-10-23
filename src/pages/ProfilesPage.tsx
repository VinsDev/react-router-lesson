import { NavLink, Outlet } from "react-router-dom";

export default function HomePage() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="flex flex-col">
                {profiles.map((profile) => <NavLink key={profile} to={`/profiles/${profile}`} className={({isActive}) => (isActive ? 'text-blue' : 'text-black')}>Profile {profile}</NavLink>)}
            </div>
            <Outlet />
        </>
    );
}