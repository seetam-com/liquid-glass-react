import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import { GlassProps } from '../types'
import { cn } from '../utils'

/**
 * Input component wrapped with liquid glass background.
 */
export interface InputProps extends GlassProps, React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    style,
    padding = '8px 12px',
    displacementScale,
    blurAmount,
    saturation,
    aberrationIntensity,
    elasticity,
    cornerRadius,
    overLight,
    mode,
    mouseContainer,
    ...inputProps
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
      className={cn('inline-block', className)}
      style={style}
    >
      <input ref={ref} className="bg-transparent outline-none border-none w-full" {...inputProps} />
    </LiquidGlass>
  )
})

Input.displayName = 'Input'

