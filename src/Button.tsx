import { blackA } from '@radix-ui/colors'
import { css } from '@stitches/core'
import { styled } from '@stitches/react'
import { ComponentProps, ReactElement, ForwardedRef, ElementRef } from 'react'
import type * as Stitches from '@stitches/react'
import React from 'react'

const button = css({
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
      a1: {
        borderRadius: '16px',
      },
      a2: {
        borderRadius: '6px',
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
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
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

const ButtonCSS = styled('button', button)

type StyledButtonVariants = Stitches.VariantProps<typeof ButtonCSS>

export type ButtonProps = StyledButtonVariants &
  ComponentProps<typeof ButtonCSS> & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    border?: StyledButtonVariants
    size?: StyledButtonVariants
  }  

function Button(
  { children, leftIcon, rightIcon, ...props }: ButtonProps,
  ref: ForwardedRef<ElementRef<typeof ButtonCSS>>,
) {
  return (
    <ButtonCSS ref={ref} {...props}>
      {children}'ola'
    </ButtonCSS>
  )
}

export default Button

Button.displayName = 'Button'