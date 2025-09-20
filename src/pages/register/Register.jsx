function Register() {
    return (
        <form>
            <div className="bg-surface min-h-screen">
                <h1 className="text-white bold">Register</h1>
            </div>
            <div className="d-flex flex-column my-4 ">
                <input
                    type="email"
                    className="inputSingIn mb-2 text-light p-2 rounded-1"
                    placeholder="E-mail"
                    
                ></input>
            </div>
            <div className="d-flex flex-column  ">
                <input
                    type="password"
                    className="mb-4 inputSingIn text-light p-2 rounded-1"
                    placeholder="Password"
                    
                ></input>
            </div>
            <button type="submit" className="mt-2 btnSingIn rounded-1 fs-3 fw-bold btn w-100">
                Login
            </button>
        </form>
    );
}

export default Register;
