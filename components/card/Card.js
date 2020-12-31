import React from 'react'
import { View } from 'react-native'

export default ({ mTop, bckCol, brdRds, ht, pd, children }) => {
  return(
    <View
      style={
        {
          marginTop: mTop,
          backgroundColor: bckCol,
          borderRadius: brdRds,
          height: ht,
          padding: pd
        }
      }
    >
      { children }
    </View>
  )
}
