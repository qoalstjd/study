import { useState, useEffect } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return typeof (onConfirm && onCancel) !== "function" ? undefined : confirmAction;
};

function ConfirmUse() {
  const deleteWorld = () => console.log("Deleting the World...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return <button onClick={confirmDelete}>Delete the world</button>;
}

export default ConfirmUse;
