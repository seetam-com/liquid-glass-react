import React from 'react'

/**
 * Shared glass component props derived from `liquid-glass-react`.
 */
export interface GlassProps {
  /** Displacement effect intensity */
  displacementScale?: number
  /** Amount of blur applied */
  blurAmount?: number
  /** Color saturation */
  saturation?: number
  /** Chromatic aberration intensity */
  aberrationIntensity?: number
  /** Elasticity of the glass */
  elasticity?: number
  /** Border radius */
  cornerRadius?: number
  /** Whether placed over light background */
  overLight?: boolean
  /** Refraction mode */
  mode?: 'standard' | 'polar' | 'prominent' | 'shader'
  /** Container for tracking mouse movement */
  mouseContainer?: React.RefObject<HTMLElement | null> | null
  /** Padding for the glass container */
  padding?: string
  /** Additional style */
  style?: React.CSSProperties
  /** Additional class names */
  className?: string
}

