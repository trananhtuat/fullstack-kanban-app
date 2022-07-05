import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Picker } from 'emoji-mart'

import 'emoji-mart/css/emoji-mart.css'

const EmojiPicker = props => {
  const [selectedEmoji, setSelectedEmoji] = useState()
  const [isShowPicker, setIsShowPicker] = useState(false)

  useEffect(() => {
    setSelectedEmoji(props.icon)
  }, [props.icon])

  const selectEmoji = (e) => {
    const sym = e.unified.split('-')
    let codesArray = []
    sym.forEach(el => codesArray.push('0x' + el))
    const emoji = String.fromCodePoint(...codesArray)
    setIsShowPicker(false)
    props.onChange(emoji)
  }

  const showPicker = () => setIsShowPicker(!isShowPicker)

  return (
    <Box sx={{ position: 'relative', width: 'max-content' }}>
      <Typography
        variant='h3'
        fontWeight='700'
        sx={{ cursor: 'pointer' }}
        onClick={showPicker}
      >
        {selectedEmoji}
      </Typography>
      <Box sx={{
        display: isShowPicker ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        zIndex: '9999'
      }}>
        <Picker theme='dark' onSelect={selectEmoji} showPreview={false} />
      </Box>
    </Box>
  )
}

export default EmojiPicker