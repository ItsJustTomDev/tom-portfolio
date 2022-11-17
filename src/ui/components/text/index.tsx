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

import styled from "styled-components"
import {BoxProps} from "@ui/components/boxes";
import { spacing, SpacingProps } from "@styles/functions/spacing"
import { transform, TransformProps } from "@styles/functions/transform"

export const Text = styled.p<BoxProps>(
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
    transform,
    variant({ scale: "text" })
)

export const Heading = styled.h1<BoxProps>(
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
    transform,
    variant({ scale: "text" })
)