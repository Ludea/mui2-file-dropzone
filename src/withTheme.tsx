import type { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import type { ComponentType } from "react";
import React, { forwardRef } from "react";

type WithoutTheme<P> = Omit<P, "theme">;
function withTheme<P extends { theme?: Theme }>(Component: ComponentType<P>) {
  return forwardRef<unknown, WithoutTheme<P>>(
    function ComponentWithTheme(props, ref) {
      const theme = useTheme();
      const combinedProps = { ...props, theme } as unknown as P;

      return <Component ref={ref} {...combinedProps} />;
    },
  );
}

export { withTheme };
