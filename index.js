import { multi } from './src/appportcode.js';
import{Ui} from './src/ui.js';
import{loading} from './src/loader.js';
// search airport
const searchAirport= document.getElementById('search');

searchAirport.addEventListener('keyup',function(event){
    loading();
    const term=event.target.value;
    console.log(term);
    if(term!==''){
        // make a http call top api
        const api = multi({
            key : '4d86ff3db0', 
            secret : '50b679eab594cf8', 
            limit : 20
        });
        api.request(term);
        // if airport find
        api.onSuccess=(data)=>{
            Ui.showResult(data);
            
        }
        // if airport not find
        api.onError=(data)=>{
            Ui.showAlert(data);
        }
    }
})