import { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });
  return status;
};

function NetworkUse() {
  const handleNetworkChange = online => {
    console.log(online ? "We just weny online" : "We are offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default NetworkUse;
