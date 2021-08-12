import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './SidebarRow.scss';

const SidebarRow = ({src, Icon, title, className, onClick}) => {
    return (
        <div className="sidebar-row" onClick={onClick}>
            {src && <Avatar src={src}/>}

            {Icon && <div className={className} ><Icon/></div>}

            <p>{title}</p>

            
        </div>
    )

}

export default SidebarRow;