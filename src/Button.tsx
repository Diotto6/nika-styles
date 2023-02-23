import { blackA } from '@radix-ui/colors'
import { css } from '@stitches/core'
import { ComponentProps, ReactElement, RefObject } from 'react'
import * as Stitches from '@stitches/react'
import * as React from 'react'
import { styled, CSS } from './stitches.config'

const ButtonCSS = css({
  variants: {
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
    border: {
      a2: {
        borderRadius: '0.6rem',
      },
      a1: {
        borderRadius: '1.5rem',
      },
      a3: {
        borderRadius: '3rem',
      },
    },
    color: {
      dark: {
        backgroundColor: `${blackA.blackA12}`,
        color: 'white',
        '&:hover': {
          backgroundColor: `${blackA.blackA11}`,
        },
      },
      violet: {
        border: 0,
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        border: 0,
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
  defaultVariants: {
    color: 'dark',
    border: 'a2',
    size: 'large',
  },
})

const ButtonStyled = styled('button', ButtonCSS)

type StyledButtonVariants = Stitches.VariantProps<typeof ButtonCSS>
type ButtonPropsPrimitive = React.ComponentProps<typeof ButtonStyled>;
type ButtonPrimitiveProps = ButtonPropsPrimitive & { css?: CSS };

export type ButtonProps = ComponentProps<typeof ButtonStyled> & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    border?: StyledButtonVariants
    size?: StyledButtonVariants
    color?: StyledButtonVariants
  }  

export const ButtonNk = React.forwardRef<
  React.ElementRef<typeof ButtonStyled>,
  ButtonPrimitiveProps
>(({ children, ...props }: any, forwardedRef: ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined) => (
 
    <ButtonStyled {...props} ref={forwardedRef}>
      {children}
    </ButtonStyled>

));

export default ButtonNk

ButtonNk.displayName = 'Button'