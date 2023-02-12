import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { RouterProvider } from "react-router"
import { router } from "./router"

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
