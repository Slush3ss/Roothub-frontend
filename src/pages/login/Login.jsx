import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login", { email, password });

            if (res.data.access_token) {
                localStorage.setItem("token", res.data.access_token);
                setMessage("Login Sucefull");
                window.location.href = "/home";
            } else {
                setMessage("Login Failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        createParticles();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="bgSingIn p-5 rounded-5">
                <h1 className="titleSingIn fw-bold m-0">Roothub</h1>
                <form className="d-flex flex-column my-4">
                    <input
                        type="email"
                        className="inputSingIn mb-4 text-light border-0 p-2 rounded-1"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        className="inputSingIn text-light border-0 p-2 rounded-1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </form>
                <button type="submit" className="btnSingIn rounded-1 fs-3 fw-bold btn w-100">
                    Login
                </button>
            </div>
        </form>
    );
}

function createParticles() {
    const particles = document.getElementById("particles");

    for (let i = 0; i < 99999; i++) {
        setTimeout(() => {
            const particleDiv = document.createElement("div");
            particleDiv.className = "particle";

            const size = Math.random() * 5 + 3.5;

            particleDiv.style.width = size + "px";
            particleDiv.style.height = size + "px";
            particleDiv.style.left = Math.random() * 99 + "%";
            particleDiv.style.top = "-10%";
            particleDiv.style.animationDuration = 15 + "s";
            particleDiv.style.animationDelay = Math.random() * 4;

            particles.appendChild(particleDiv);

            setTimeout(() => {
                if (particles.contains(particleDiv)) {
                    particles.removeChild(particleDiv);
                }
            }, 15000);
        }, i * 2250);
    }
}

export default Login;
