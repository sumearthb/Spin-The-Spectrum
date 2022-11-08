import './breakdown.css';
import { Route, Routes, Router } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import Smell from './../../resources/smell.png';
import Hearing from './../../resources/hearing.png';
import Taste from './../../resources/taste.png';
import Touch from './../../resources/touch.png';
import Sight from './../../resources/sight.png';
import Bubble from './../../resources/bubble.png';
import breakdownYes from './breakdownYes.js'
import breakdownNo from './breakdownNo.js'
import {Link} from 'react-router-dom';



function handleClickNo()
{
<breakdownno />
}

function breakdown() {
    return (
        <div className="BreakdownApp">
            <header className='BreakdownApp-header'>
                <style>{'body {background-color: #f6c492; }'}</style>
                <center>
                    <h1>It looks like you're feeling different</h1>
                    <ButtonGroup>
                        <button><Link to= "/breakdown">Yes</Link></button>
                        <button><Link to= "/breakdownno">No</Link></button>
                    </ButtonGroup>
                </center>
            </header>
        </div>
    );
}

export default breakdown;
