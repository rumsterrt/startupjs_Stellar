// Icons use FontAwesomeIcon library feature ( https://goo.gl/ov6Dsj ).
// You must add the icons you want to use in the project into file /main/icons.js
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { observer } from 'startupjs'

// Same as line heights
const SIZES = {
  xs: 14,
  s: 18,
  m: 20,
  l: 30,
  xl: 40,
  xxl: 60
}

export default observer(({ name, size = 'm', color, style, type, ...props }) => ( // 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  <FontAwesomeIcon
    icon={type ? [type, name] : name}
    size={typeof size === 'number' ? size : SIZES[size]}
    style={style}
    color={color}
    {...props}
  />
))
