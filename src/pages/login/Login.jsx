import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login", { email, password });

            if (res.data.access_token) {
                localStorage.setItem("token", res.data.access_token);
                navigate("/home");
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
                <h1 className="titleSingIn fw-bold pb-2 text-white text-4xl">
                    Root
                    <span className="hub-span hover:decoration-white">hub</span>
                </h1>

                <div className="d-flex flex-column my-4 ">
                    <input
                        type="email"
                        className="inputSingIn mb-2 text-light p-2 rounded-1"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="d-flex flex-column  ">
                    <input
                        type="password"
                        className="mb-4 inputSingIn text-light p-2 rounded-1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button type="submit" className="mt-2 btnSingIn rounded-1 fs-3 fw-bold btn w-100">
                    Login
                </button>
                <p className="text-white">Ainda não tem uma conta? <a href="/register">Registrar-se</a></p>
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
