import * as React from 'react';
import { ButtonNika } from './Button'
import { ButtonProps } from './Button';
export {
  darkTheme,
} from './stitches.config';

export function Button(props: ButtonProps){
  return <ButtonNika {...props}>{props.children}</ButtonNika>
}