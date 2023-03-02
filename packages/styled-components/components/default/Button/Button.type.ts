import { IFrames, IHiddenRanges, IMargin, IPadding } from '@interfaces/layout';
import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { IGradientContainer } from '../GradientContainer/GradientContainer.type';

interface IButton extends IFrames, IHiddenRanges, IPadding, IMargin {
	children: ReactNode;
	onClick?: () => void;
	valueToCopy?: string;
	href?: string;
	color?: string;
	noPaddingResponsive?: boolean;
	icon?: ReactNode;
	iconColor?: string;
	gradientContainerProps?: IGradientContainer;
}

interface ISharedButtonProps {
	theme: DefaultTheme;
	iconColor?: string;
	color?: string;
}

export type { IButton, ISharedButtonProps };
