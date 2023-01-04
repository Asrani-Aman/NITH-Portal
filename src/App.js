// import React from "react";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput,
// } from "mdb-react-ui-kit";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
// function App() {
//   return (
//     <MDBContainer className="my-5">
//       <MDBCard>
//         <MDBRow className="g-0">
//           <MDBCol md="6">
//             <MDBCardImage
//               src="data:image/png;base64,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"
//               alt="login form"
//               className="rounded-start w-100"
//             />
//           </MDBCol>

//           <MDBCol md="6">
//             <MDBCardBody className="d-flex flex-column">
//               <div className="d-flex flex-row mt-2">
//                 <MDBIcon
//                   fas
//                   icon="cubes fa-3x me-3"
//                   style={{ color: "#ff6219" }}
//                 />
//                 <span className="h1 fw-bold mb-0">NITH PORTAL</span>
//               </div>

//               <h5
//                 className="fw-normal my-4 pb-3"
//                 style={{ letterSpacing: "1px" }}
//               >
//                 Sign into your account
//               </h5>

//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Email address"
//                 id="formControlLg"
//                 type="email"
//                 size="lg"
//               />
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Password"
//                 id="formControlLg"
//                 type="password"
//                 size="lg"
//               />

//               <MDBBtn className="mb-4 px-5" color="dark" size="lg">
//                 Login
//               </MDBBtn>
//               <a className="small text-muted" href="#!">
//                 Forgot password?
//               </a>
//               <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                 Don't have an account?{" "}
//                 <a href="#!" style={{ color: "#393f81" }}>
//                   Register here
//                 </a>
//               </p>

//               <div className="d-flex flex-row justify-content-start">
//                 <a href="#!" className="small text-muted me-1">
//                   Terms of use.
//                 </a>
//                 <a href="#!" className="small text-muted">
//                   Privacy policy
//                 </a>
//               </div>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// }

// export default App;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer
      fluid
      style={{
        backgroundColor: "#c1c1c1",
        height: "100vh",
      }}
    >
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(data:image/png;base64,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)",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>

      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">LOG IN PANEL</h2>

          <MDBRow>
            {/* <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="First name"
                id="form1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Last name"
                id="form1"
                type="text"
              />
            </MDBCol> */}
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            // label="Email"
            id="form1"
            type="email"
            placeholder="Enter your Registerd Email"
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Password"
            id="form1"
            type="password"
            placeholder="Enter your password"
          />

          {/* <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div> */}

          <MDBBtn className="w-100 mb-4" size="md">
            sign up
          </MDBBtn>

          {/* <div className="text-center">
            <p></p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div> */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
