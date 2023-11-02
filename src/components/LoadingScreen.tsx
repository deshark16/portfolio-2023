import { StyledLoadingScreen } from "shared/styled/StyledLoadingScreen";
import { StyledLoadingScreenLoad } from "shared/styled/StyledLoadingScreen/load";
import { memo, useEffect, useState } from "react";

const LoadingScreen = memo(() => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        setLoading(false);
      }, 500)
    })
  }, [setLoading])
  return (
    <StyledLoadingScreen data-screen={`${!loading ? "loading" : "loaded"}`}>
      <StyledLoadingScreenLoad />
    </StyledLoadingScreen>
  )
})

LoadingScreen.displayName = "Loading Screen"

export default LoadingScreen;