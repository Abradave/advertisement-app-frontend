import { useRef } from "react";


function LoginPage() {
    const apiUrl = "http://localhost:8000/api"
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const login = async formData => {
        const url = apiUrl + "/login";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            localStorage.setItem("token", data.token);
        } else {
            alert(data.message);
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        login(user)
    }

    return (
        <form style={{ marginTop: "5px" }} onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="loginEmail">E-mail</label>
                <input type="email" id="loginEmail" placeholder="e-mail" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="loginPassword">Jelszó</label>
                <input type="password" id="loginPassword" placeholder="jelszó" ref={passwordRef} />
            </div>
            <button type="submit">Bejelentkezés</button>
        </form>);
}

export default LoginPage;