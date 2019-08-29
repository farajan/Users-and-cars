import React from 'react'
import { Icon } from 'semantic-ui-react'

const ExtraContent = ({cars}) => {
    const length = cars === null ? 0 : cars.length;
    return (
        <div>
            <Icon name='car' />
            {`${length} Car${length <= 1 ? '' : 's'}`}
        </div>
    )        
};


export default ExtraContent;