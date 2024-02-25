import { Global } from '@emotion/react';

const DisableTouchHighlight = () => (
    <Global
        styles={{
            button: {
                outline: 'none',
                focus: 'none',
            },
            a: {
                WebkitTapHighlightColor: 'transparent',
            },
            '*': {
                WebkitTapHighlightColor: 'transparent',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
            },
        }
        }
    />
);

export default DisableTouchHighlight;
