import React from 'react'
import { NavBar } from './NavBar';
import { Wrapper, Wrappervariant } from './Wrapper';

interface LayoutProps {
    children: any;
    variant?: Wrappervariant;
}

export const Layout: React.FC<LayoutProps> = ({children, variant}) => {
        return (
            <>
                  <NavBar />
                  <Wrapper variant={variant}>
          
                {children}
            </Wrapper>
            </>
            
        );
}