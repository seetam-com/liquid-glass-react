import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import { GlassProps } from '../types'
import { cn } from '../utils'

/**
 * Card component with liquid glass styling.
 */
export interface CardProps extends GlassProps, React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    style,
    padding = '24px 32px',
    displacementScale,
    blurAmount,
    saturation,
    aberrationIntensity,
    elasticity,
    cornerRadius,
    overLight,
    mode,
    mouseContainer,
    ...divProps
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
      className={cn('block', className)}
      style={style}
    >
      <div ref={ref} {...divProps}>
        {children}
      </div>
    </LiquidGlass>
  )
})

Card.displayName = 'Card'

