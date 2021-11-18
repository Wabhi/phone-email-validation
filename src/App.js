import React, { Component } from "react";
import validator from "validator";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      email: ""
    };
  }

  render() {
    const { phone, email } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div style={{ position: "relative" }}>
            <h4>Enter Phone Number</h4>
            <Textbox
              tabIndex="1" //Optional.[String or Number].Default: -1.
              id={"phone"} //Optional.[String].Default: "".  Input ID.
              name="phone" //Optional.[String].Default: "". Input name.
              type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
              value={phone} //Optional.[String].Default: "".
              placeholder="Place your phone here ^-^" //Optional.[String].Default: "".
              onChange={(phone, e) => {
                this.setState({ phone });
                console.log(e);
              }} //Required.[Func].Default: () => {}. Will return the value.
              onBlur={(e) => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
              validationOption={{
                name: "phone", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                customFunc: (phone) => {
                  if (validator.isMobilePhone(phone, "en-US")) {
                    return true;
                  } else {
                    return "is not a valid phone number";
                  }
                }
              }}
            />
            <br />
            <h4>Enter Email Address</h4>
            <Textbox
              tabIndex="1" //Optional.[String or Number].Default: -1.
              id={"email"} //Optional.[String].Default: "".  Input ID.
              name="email" //Optional.[String].Default: "". Input name.
              type="text" //Optional.[String].Default: "text". Input type [text, password, phone, number].
              value={email} //Optional.[String].Default: "".
              placeholder="Place your email here ^-^" //Optional.[String].Default: "".
              onChange={(email, e) => {
                this.setState({ email });
                console.log(e);
              }} //Required.[Func].Default: () => {}. Will return the value.
              onBlur={(e) => {}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
              validationOption={{
                name: "email", //Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                customFunc: (email) => {
                  const reg = /^[a-zA-Z](([^<>()\[\]\\//.,;:-\s@"!#$%^&*+=|'}{`~]+(\.[^<>()\[\]\\_,;:\s@,"]+)*(?!.*?\.\.))|(".+")){5,30}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if (reg.test(String(email).toLowerCase())) {
                    return true;
                  } else {
                    return "is not a valid email address";
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
