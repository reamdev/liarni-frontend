import React, { memo, useEffect, useState } from 'react'
import { LinearProgress } from '@mui/material'
import { LiarniSplashScreenContainer, LiarniSplashScreenLoader, LiarniSplashScreenMotionContainer, LiarniSplashScreenTitle } from 'components/entities/LiarniSplashScreen'

const liarniSplashScreenVariants = {
	entryAnimation: {
		y: [-25, 0],
		opacity: [0, 1],
		transition: {
			y: {
				duration: 0.25
			},
			opacity: {
				duration: 0.25
			}
		}
	},
	exitAnimation: {
		y: [0, -25],
		opacity: [1, 0],
		transition: {
			y: {
				duration: 0.25
			},
			opacity: {
				duration: 0.25
			}
		}
	}
}

type LiarniSplashScreenProps = {
	changeAnimation: boolean
}

const LiarniSplashScreen = ({ changeAnimation }: LiarniSplashScreenProps) => {
	const [variant, setVariant] = useState<'entryAnimation' | 'exitAnimation'>('entryAnimation')

	useEffect(() => {
		if (changeAnimation && variant === 'entryAnimation') {
			setVariant('exitAnimation')
		}
	}, [changeAnimation])

	return (
		<LiarniSplashScreenContainer
			variants={liarniSplashScreenVariants}
			animate={variant}
		>
			<LiarniSplashScreenMotionContainer>
				<LiarniSplashScreenTitle>
					<p>Liarni</p>
				</LiarniSplashScreenTitle>
				<LiarniSplashScreenLoader>
					<LinearProgress/>
				</LiarniSplashScreenLoader>
			</LiarniSplashScreenMotionContainer>
		</LiarniSplashScreenContainer>
	)
}

export default memo(LiarniSplashScreen)
