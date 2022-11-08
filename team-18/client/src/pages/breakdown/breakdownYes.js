import './breakdown.css';
import { ButtonGroup } from '@mui/material';
import Smell from './../../resources/smell.png';
import Hearing from './../../resources/hearing.png';
import Taste from './../../resources/taste.png';
import Touch from './../../resources/touch.png';
import Sight from './../../resources/sight.png';
import Bubble from './../../resources/bubble.png';


function breakdownYes() {
    return (
        <div className="BreakdownApp">
            <header className='BreakdownApp-header'>
                <style>{'body {background-color: #f6c492; }'}</style>
                <center>
                    <h1>Tell me where it feels different</h1>
                    <ButtonGroup>
                        
                        <button><img src={Smell} alt="Smell" /></button>
                        <button><img src={Taste} alt="Taste" height={150}/></button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <button><img src={Hearing} alt="Hearing" /></button>
                        <button><img src={Sight} alt="Sight" height={150} /></button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <button><img src={Touch} alt="Touch" /></button>
                        <button><img src={Bubble} alt="Bubble" height={200} /></button>
                    </ButtonGroup>
                </center>
            </header>
        </div>
    );
}

export default breakdownYes;
