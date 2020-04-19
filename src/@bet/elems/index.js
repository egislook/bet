import React from 'react'
import NextJsLink from 'next/link'
import { StyleSheet, Text, View } from 'react-native'

const assetPrefix = process.env.ASSET_PREFIX || ''
console.log({ assetPrefix })

export const Link = props => <Text accessibilityRole="link" href={assetPrefix + props.href} {...props} />
// export const Link = (props) => <NextJsLink {...props} as={`${assetPrefix}${props.href}`} />

export default {
	Link
}