import { Box, CircularProgress } from '@mui/material'

const Loading = props => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: props.fullHeight ? '100vh' : '100%'
    }}>
      <CircularProgress />
    </Box>
  )
}

export default Loading