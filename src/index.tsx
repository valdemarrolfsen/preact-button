import Button from "@mui/material/Button";
import register from "preact-custom-element";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

function UIButton({ onClick, label }: ButtonProps) {
  return <Button onClick={onClick}>{label}</Button>;
}

register(UIButton, "ui-button", ["label", "onClick"], { shadow: true });
