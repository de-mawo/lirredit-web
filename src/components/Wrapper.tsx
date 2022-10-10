import { Box } from '@chakra-ui/react';
import React from 'react'

export type Wrappervariant = 'small' | 'regular';

interface WrapperProps {
children: any;
variant?: Wrappervariant
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant='regular'}) => {
        return (
            <Box mt={8} maxWidth={ variant === 'regular' ? '800px' : '400px' } w='100%' mx='auto'>
                {children}
            </Box>
        );
} 