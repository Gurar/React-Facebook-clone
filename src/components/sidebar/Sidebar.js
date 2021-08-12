import React, {useState} from 'react'
import './Sidebar.scss';
import SidebarRow from './SidebarRow';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import {HomeSidebarData} from '../../data/HomeSidebarData';



const Sidebar = () => {
    let [isToggle, setIsToggle] = useState(true);
    let [data, setData] = useState(HomeSidebarData);
    const [loadMoreContent, setLoadMoreContent] = useState(
        {
            icon: IoIosArrowDown,
            title: 'See More',
            count: 9
        }
    )

    const onLoadMoreContent = () => {
        if(isToggle) {
            setIsToggle(false);
            setLoadMoreContent({
                icon: IoIosArrowUp,
                title: 'Less See',
                count: data.length
            });
            
        }else {
            setIsToggle(true);
            setLoadMoreContent({
                icon: IoIosArrowDown,
                title: 'See More',
                count: 9
            });
        }

        
    }

    const currenDisplay = data.slice(0, loadMoreContent.count);

    const sidebarRowArray = currenDisplay.map((item , i) => {
        return (

            <SidebarRow
            key={i}
            src={data[i].url}
            title={data[i].title}
            />
        );    
            
    });

    return (
        
        <div className="sidebar">
            <SidebarRow
                src='https://sveikata.tv3.lt/uploads/modules/articles/580x300/2014/11/nuostabus-pauksciai-foto-2493.jpg?t=1414962354'
                title={'test'}
            />

            {sidebarRowArray}

            <SidebarRow
                className={'btn-see-more'}
                Icon={loadMoreContent.icon}
                title={loadMoreContent.title}
                onClick={onLoadMoreContent}
            />
        </div>
    )
}


export default Sidebar;