import {Component} from 'react'
import Cars from './Cars';
class Mycars extends Component {
    state = { 
        cars:[{colors:'red' ,marque:'Peugeot'},
        {colors:'red' ,marque:'Peugeot'},
    ]
     } 
    render() { 
        return (
            <div>
               <h1> Catalogues des voitures</h1>
               <Cars/>
               <Cars colors='bleu' marque='Ford'/>
               <Cars marque='toyota' colors='yellow'/>
               <Cars marque='Honda'/>
            </div>
        );
    }
}
 
export default Mycars;