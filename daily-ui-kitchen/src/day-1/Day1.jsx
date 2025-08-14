import "./Day1.css";
function Day1() {
  return (
    <div className="screen">
      <div className="container-1">
        <p className="container-1-text">
          Getting <br />
          Started With <br /> Workout
        </p>
        <div className="container-2">
          <button className="language">
            {"English (UK)"} <img className="dropdown" alt="" />
          </button>
          <div className="fields">
            <p>Create Account</p>
            <div className="OAuth-wrapper">
              <button className="OAuth google">Sign in with Google</button>
              <button className="OAuth facebook">Sign in with Facebook</button>
            </div>
            <p
              style={{
                fontWeight: "normal",
                opacity: "60%",
                fontFamily: "inter",
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              OR
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "36px",
              }}
            >
              <input className="input" type="text" placeholder="Full Name" />
              <input className="input" type="text" placeholder="Email" />
              <input
                className="input password"
                type="text"
                placeholder="Password"
              />
            </div>
            <button className="create-acc">Create Account</button>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}>
              <span style={{ opacity: 0.64 }}>Already have an account?</span>
              <span
                style={{
                  opacity: 1,
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
              >
                {" "}
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day1;
