import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useResponsiveFontSize = () => {
  const theme = useTheme();

  // Use breakpoints for responsive font sizes
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Define responsive font sizes based on screen size
  const smallFontSize = isSmallScreen
    ? '16px'
    : isMediumScreen
    ? '16px'
    : '22px';

  const largeFontSize = isSmallScreen
    ? '28px'
    : isMediumScreen
    ? '32px'
    : '56px';

  return { smallFontSize, largeFontSize };
};

export default useResponsiveFontSize;
