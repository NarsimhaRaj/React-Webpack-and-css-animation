import React, { useState } from 'react';
import './menulist.scss';

export function MenuList({ list }) {
    let [myId, setMyId] = useState('mm-1');
    const keyClick = (index, list, id) => {
        let elem1 = document.getElementById(myId).classList;
        if (id) {
            elem1.add('mm-subopened');
        }
        let elem2 = document.getElementById(id).classList;
        if (id) {
            elem2.add('mm-highest');
            elem2.add('mm-opened');
        }
        setMyId(id);
    }

    function goBack(id) {
        let arr = id.split('-');
        let p;
        console.log("here1");
        if (arr.length > 3) {
            p = 'mm-'+arr[1]+'-'+arr[2];
            document.getElementById(p).classList.remove('mm-subopened');
            document.getElementById(p).classList.add('mm-opened');
            document.getElementById(id).classList.remove('mm-opened');
            setTimeout(()=>document.getElementById(id).classList.add('mm-hidden'),400);
        }
        else {
            p = 'mm-'+arr[1];
            document.getElementById(id).classList.remove('mm-opened');
            document.getElementById(p).classList.remove('mm-subopened');
            setTimeout(()=>document.getElementById(id).classList.add('mm-hidden'),400);
        }

    }

    return (
        <div className="mm-menu mm-effect-slide-menu mm-effect-zoom-panels mm-offcanvas">
            <div className="mm-panel mm-opened" id='mm-1'>
                <ul id="myul" className="ul-current">
                    {
                        Object.keys(list).map((keyName, index) => typeof list[keyName] === "string" ? <li key={`${keyName + index}`}>{list[keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list[keyName], `mm-1-${index}`)}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-1-2'>
                <ul id="myul" >
                    <li onClick={(event) => goBack('mm-1-2')}>{`${"<--"}`}Back</li>
                    {
                        Object.keys(list['key3']).map((keyName, index) => typeof list['key3'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key3'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key3'][keyName])}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-1-3'>
                <ul id="myul" className="ul-current">
                    <li onClick={(event) => goBack('mm-1-3')}>{`${"<--"}`}Back</li>
                    {
                        Object.keys(list['key7']).map((keyName, index) => typeof list['key7'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key7'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key7'][keyName], `mm-1-3-${index}`)}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-1-3-3'>
                <ul id="myul" className="ul-current">
                    <li onClick={(event) => goBack('mm-1-3-3')}>{`${"<--"}`}Back</li>
                    {
                        Object.keys(list['key7']['key17']).map((keyName, index) => typeof list['key7']['key17'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key7']['key17'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key7']['key17'][keyName])}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
        </div>
    )
}