import React from 'react'
import { Icon } from 'semantic-ui-react'

const ExtraContent = ({carCount}) => {
    return (
        <div>
            <Icon name='car' />
            {`${carCount} Car${carCount === 1 ? '' : 's'}`}
        </div>
    )        
};


export default ExtraContent;