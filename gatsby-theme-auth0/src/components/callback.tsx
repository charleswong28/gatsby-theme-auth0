import * as React from "react";
import { WindowLocation } from "@reach/router";
import AuthService from "../../auth/service";
import Spinner from "./spinner";

export interface Props {
  location: WindowLocation;
}

const Callback = (props: Props) => {
  const { location } = props;
  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      AuthService.handleAuthentication();
    }
  }, []);

  return (
    <div style={{ margin: "2rem", textAlign: "center" }}>
      <Spinner />
    </div>
  );
};

export default Callback;
