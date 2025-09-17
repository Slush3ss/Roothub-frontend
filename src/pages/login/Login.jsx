import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function login() {
  useEffect(() => {
    createParticles();
  }, []);

  return (
    <>
      <div className="bgSingin p-5 rounded-5">
        <h1 className="titleSingin fw-bold m-0">Roothub</h1>
        <form className="d-flex flex-column my-4">
          <input
            type="text"
            className="inputsSingin mb-4 text-light border-0 p-2 rounded-1"
            placeholder="E-mail"
          ></input>
          <input type="text" className="inputsSingin text-light border-0 p-2 rounded-1" placeholder="Password"></input>
        </form>
        <button className="btnSingin rounded-1 fs-3 fw-bold btn w-100">Sing in</button>
      </div>
    </>
  );
  createParticles();
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

      particles.appendChild(particleDiv);

      setTimeout(() => {
        if (particles.contains(particleDiv)) {
          particles.removeChild(particleDiv);
        }
      }, 15000);
    }, i * 1250);
  }
}

export default login;
