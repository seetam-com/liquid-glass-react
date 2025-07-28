import React from 'react'
import LiquidGlass from 'liquid-glass-react'
import { GlassProps } from '../types'
import { cn } from '../utils'

/**
 * Modal component using liquid glass for the dialog container.
 */
export interface ModalProps extends GlassProps, React.HTMLAttributes<HTMLDivElement> {
  /** Controls whether the modal is visible */
  open: boolean
  /** Called when the backdrop is clicked */
  onClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
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
  ...rest
}) => {
  if (!open) return null

  const { onClick, ...divProps } = rest

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
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
        className={cn('relative max-w-lg w-full', className)}
        style={style}
        {...divProps}
      >
        {children}
      </LiquidGlass>
    </div>
  )
}

