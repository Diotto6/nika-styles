import React, { ForwardedRef } from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";
import Header from "./Header";

const button = document.createElement('button') as unknown as ForwardedRef<HTMLButtonElement>
const container = document.getElementById("app");
const root = createRoot(container!)
root.render(Button('ola', button)) 