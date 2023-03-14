import { ComponentProps, ElementRef, forwardRef, ReactElement, RefObject } from 'react'
import * as Stitches from '@stitches/react'
import * as React from 'react'
import { styled, CSS } from '../../stitches.config'
import ButtonCSS from '../../styles/buttonCSS'

const ButtonStyled = styled('button', ButtonCSS)

type StyledButtonVariants = Stitches.VariantProps<typeof ButtonCSS>
type ButtonPropsPrimitive = ComponentProps<typeof ButtonStyled>;
type ButtonPrimitiveProps = ButtonPropsPrimitive & { css?: CSS };

export type ButtonProps = ButtonPrimitiveProps & ComponentProps<typeof ButtonStyled> &  {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    border?: StyledButtonVariants
    size?: StyledButtonVariants
    color?: StyledButtonVariants
  }  

export const ButtonNika = forwardRef<
 ElementRef<typeof ButtonStyled>,
  ButtonPrimitiveProps
>(({ children, ...props }: ButtonProps, forwardedRef: ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined) => (
 
    <ButtonStyled {...props} ref={forwardedRef}>
      <span>{props.leftIcon}</span>
      {children}
      <span>{props.rightIcon}</span>
    </ButtonStyled>

));

ButtonNika.displayName = 'Button'