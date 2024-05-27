import React from 'react';

import ErrorMessage from './ErrorMessage';
interface WithArrayValidationProps {
    assets: any[];
}

function withArrayValidation<T extends WithArrayValidationProps>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {
        const { assets, ...rest } = props;
        if (Array.isArray(assets) && assets.length !== 0) {
            return <WrappedComponent {...rest as T} assets={assets} />;
        } else {
            return <ErrorMessage />;
        }
    };
}

export default withArrayValidation;