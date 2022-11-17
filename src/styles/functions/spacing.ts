import css from "@styled-system/css"
import { ResponsiveValue, styleFn } from "styled-system"
import { isDefined } from "ts-is-present"
import { asResponsiveArray } from "../utils"

/**
 * CSS spacing rules for Styled Components
 */

type SpaceValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface SpacingProps {
    spacing?: ResponsiveValue<SpaceValue>
    spacingHorizontal?: boolean
}

export const spacing: styleFn = (x: SpacingProps) => {
    if (isDefined(x.spacing)) {
        const value = asResponsiveArray(x.spacing)

        return css({
            "& > *:not(:last-child)": {
                marginRight: x.spacingHorizontal ? value : null,
                marginBottom: !x.spacingHorizontal ? value : null
            }
        })
    }
}
