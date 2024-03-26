import { useEffect, useState } from 'react';

function UserProfilePage() {
    const apiUrl = "http://localhost:8000/api"
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            loadUserData();
        } else {
            setUser(null);
        }
    }, []);

    const loadUserData = async () => {
        const token = localStorage.getItem("token");
        const url = apiUrl + "/user"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        const data = await response.json();
        if (response.ok) {
            setUser(data);
        } else {
            localStorage.removeItem("token");
        }
    }

    const logout = async () => {
        const token = localStorage.getItem("token");
        const url = apiUrl + "/logout";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        })
        if (response.ok) {
            localStorage.removeItem("token");
        } else {
            const data = await response.json();
            alert(data.message);
        }
    }

    const logoutEverywhere = async () => {
        const token = localStorage.getItem("token");
        const url = apiUrl + "/logout-everywhere";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        })
        if (response.ok) {
            localStorage.removeItem("token");
        } else {
            const data = await response.json();
            alert(data.message);
        }
    }

    return user ? (
        <div>
            <p>Bejelentkezve: {user.name}</p>
            <button type="button" onClick={() => logout()}>Kijelentkezés</button>
            <button type="button" onClick={() => logoutEverywhere()}>Kijelentkezés mindenhonnan</button>
        </div>
    ) : (
        <></>
    );
}


export default UserProfilePage;