class ui{
    constructor(){
        this.display=document.getElementById('displayrow');
        this.notify=document.getElementById('notification')
    }
    showResult(data){
        const result=data.airports;
        console.log(result);
        let output=''
        for(let index=0;index<result.length;index++){
            output+="<tr>"
            output+="<td>"+result[index].name+"</td>"
            output+="<td>"+result[index].iata+"</td>"
            output+="<td>"+result[index].state.type+"</td>"
            output+="<td>"+result[index].city+"</td>"
            output+="<td>"+result[index].state.name+"</td>"
            output+="<td>"+result[index].country.name+"</td>"
            output+="</tr>"

        }
        this.notify.innerHTML=`
        <article class="message valid">
       
                <div class="message-body">
                Showing <span class='tag'>${result.length}</span>
                   Result for ${data.term.toUpperCase()}
                </div>
            </article>
        
        `;
        console.log(output);
        this.display.innerHTML=output
    }
    showAlert(data){
        console.log(data.message);
        this.notify.innerHTML=`
        <article class="message invalid">
       
                <div class="message-body">
                    ${data.message}
                </div>
            </article>
        
        `;
        setTimeout(()=>{
            this.clearAlert();
        },3000)
    }
    clearAlert(){
        const currentAlert= document.querySelector('.invalid');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    
}
export const Ui=new ui();