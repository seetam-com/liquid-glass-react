import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import { GlassProps } from '../types'
import { cn } from '../utils'

/**
 * Button component rendered with a liquid glass background.
 */
export interface ButtonProps extends GlassProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    style,
    padding = '8px 16px',
    displacementScale,
    blurAmount,
    saturation,
    aberrationIntensity,
    elasticity,
    cornerRadius,
    overLight,
    mode,
    mouseContainer,
    ...buttonProps
  } = props

  return (
    <LiquidGlass
      displacementScale={displacementScale}
      blurAmount={blurAmount}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
      cornerRadius={cornerRadius}
      overLight={overLight}
      mode={mode}
      mouseContainer={mouseContainer}
      padding={padding}
      className={cn('inline-block cursor-pointer select-none', className)}
      style={style}
    >
      <button ref={ref} className="bg-transparent border-none outline-none p-0 m-0 w-full h-full" {...buttonProps}>
        {children}
      </button>
    </LiquidGlass>
  )
})

Button.displayName = 'Button'

