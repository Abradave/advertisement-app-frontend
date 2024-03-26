import { useRef } from "react";

function RegisterPage() {
    const apiUrl = "http://localhost:8000/api"
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const handleFormSubmit = event => {
        event.preventDefault()
        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
        };
        register(newUser)
    }

    const register = async userData => {
        const url = apiUrl + "/register";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            alert("Sikeres regisztráció!")
        } else {
            alert(data.message);
        }
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="e-mail" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Jelszó</label>
                <input type="password" id="password" placeholder="jelszó" ref={passwordRef} />
            </div>
            <div>
                <label htmlFor="name">Név</label>
                <input type="text" id="name" placeholder="név" ref={nameRef} />
            </div>
            <button type="submit">Regisztráció</button>
        </form>);
}
export default RegisterPage;