import * as React from 'react';
import { ButtonNika, ButtonProps } from "./Button";

export function Button(props: ButtonProps){
  return <ButtonNika {...props}>{props.children}</ButtonNika>
}