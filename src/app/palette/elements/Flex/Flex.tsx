import styled from "styled-components/native"
import { Box, BoxProps } from "../Box"

export type FlexProps = BoxProps

/**
 * flex is a box with display: flex
 */
export const Flex = styled(Box)<FlexProps>``

Flex.defaultProps = {
  display: "flex",
}

Flex.displayName = "Flex"
