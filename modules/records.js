import {records} from "./dom.js";

class Records {
    constructor() {
        const currentDate = new Date();

        // Format date as Mon DD, YYYY
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        this.date = `${month} ${day}, ${year}`;

        // Format time as HH:MM:SS
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        this.time = `${hours}:${minutes}`;

        this.records = []
    }

    createRecord(hour, minute, second){

        const newRecord = {
            hour:hour,
            minute:minute,
            second:second,
            data:this.date,
            time:this.time
        }
        this.records.push(newRecord);
        for (const record of this.records){
            // create html element
            const container = document.createElement('div');
            const hourHolder = document.createElement('span');
                    hourHolder.textContent = record.hour+' hr';
            const minuteHolder = document.createElement('span');
                    minuteHolder.textContent = record.minute+' min'
            const secondHolder = document.createElement('span');
                    secondHolder.textContent = record.second+' sec'
            const iconContainer = document.createElement('div')
            iconContainer.innerHTML = '<i class="fa-solid fa-trash"></i>'
            iconContainer.addEventListener('click', ()=>{
                this.records.splice(this.records.indexOf(newRecord), 1);
                records.removeChild(container);
            })
            container.append(hourHolder, minuteHolder, secondHolder, iconContainer);
            container.classList.add('newRecord')
                    records.appendChild(container)
            console.log(this.records)
        }

    }

}

export default Records;