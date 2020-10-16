import {InfoData} from '../components/info-card/info-card.component';

export class Utils {

    numberList = ['amount'];
    moneyList = ['income', 'investment', 'dividend', 'value', 'price'];
    dateList = ['creationDate'];

    sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    dataToInfoData = (data): InfoData[] => {
        const result = [];
        for (const elem in data) {
            if (data[elem]) {
                let type = null;
                if (this.numberList.includes(elem)) {
                    type = 'number';
                }
                if (this.moneyList.includes(elem)) {
                    type = 'money';
                }
                if (this.dateList.includes(elem)) {
                    type = 'date';
                }
                if (data[elem]) {
                    result.push({label: elem, value: data[elem], type});
                }
            }
        }
        return result;
    }



    createTooltip = (data): string[] => {
        const str: string[] = ['Pending:'];
        data.forEach(elem => {
            str.push(`${elem.label}: ${elem.value}`);
        });
        return str;
    }

    createBalancePendingStr = (value) => {
        const signed = value >= 0 ? '+' : '-';
        return `(${signed}${value > 0 ? value : value * -1})`;
    }

    addSpaces = (nStr) => {
        nStr += '';
        const x = nStr.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    }
}
