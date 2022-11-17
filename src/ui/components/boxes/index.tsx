import styled from "styled-components"
import {
    borders,
    BordersProps,
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    variant,
    VariantArgs
} from "styled-system"
import { spacing, SpacingProps } from "@styles/functions/spacing"
import { transform, TransformProps } from "@styles/functions/transform"

export type BoxProps = SpaceProps &
    SpacingProps &
    LayoutProps &
    FlexboxProps &
    ColorProps &
    PositionProps &
    TypographyProps &
    BordersProps &
    ShadowProps &
    GridProps &
    TransformProps &
    VariantArgs

export const Box = styled.div<BoxProps>(
    { boxSizing: "border-box" },
    space,
    spacing,
    layout,
    flexbox,
    color,
    position,
    typography,
    borders,
    shadow,
    grid,
    transform
)

export const FlexBox = styled.div<BoxProps>(
    { boxSizing: "border-box", display: "flex" },
    space,
    spacing,
    layout,
    flexbox,
    color,
    position,
    typography,
    borders,
    shadow,
    grid,
    transform
)

export const GridBox = styled.div<BoxProps>(
    { boxSizing: "border-box", display: "grid" },
    space,
    spacing,
    layout,
    flexbox,
    color,
    position,
    typography,
    borders,
    shadow,
    grid,
    transform
)

