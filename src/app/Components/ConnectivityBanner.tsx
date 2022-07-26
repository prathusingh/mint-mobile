import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components/native"

const Container = styled.View`
  height: 30;
  backgroudn-color: ${themeGet("colors.yellow10")};
  justify-content: center;
  align-items: center;
`

const ConnectivityMessage = styled.Text`
  color: ${themeGet("colors.yellow100")};
  text-align: center;
  font-size: 16;
  padding-top: 5;
`

const ConnectivityBanner: React.FC = () => {
  return (
    <Container>
      <ConnectivityMessage>No Internet Connection</ConnectivityMessage>
    </Container>
  )
}

export default ConnectivityBanner
