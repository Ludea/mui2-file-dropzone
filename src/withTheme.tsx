import type { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import type { ComponentType } from "react";
import React, { forwardRef } from "react";

type WithoutTheme<P> = Omit<P, "theme">;

function withTheme<P extends { theme?: Theme }>(Component: ComponentType<P>) {
  return forwardRef(function ComponentWithTheme(
    props: WithoutTheme<P>,
    ref: any,
  ) {
    const theme = useTheme();
    const combinedProps = { ...props, theme } as P;

    return <Component ref={ref} {...combinedProps} />;
  });
}

export { withTheme };
