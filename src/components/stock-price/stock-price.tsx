import { Component, h, State, Element } from "@stencil/core";
import {AV_API_KEY} from '../../global/global';

console.log(AV_API_KEY)

@Component({
    tag: 'ab-atock-price',
    styleUrl: './stock-price.css',
    shadow: true,
})

export class StockPrice {
    @Element() el: HTMLElement;
    @State() fetchedPrice: number = 0;

    onSumbitHandle(event: Event){
        event.preventDefault();

        const userInput = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=${AV_API_KEY}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(+data['Global Quote']['05. price']);
            this.fetchedPrice = +data['Global Quote']['05. price'];
        })
        .catch(error => {
            console.log(error);
        })

    }

    render() {
        return [
            <form onSubmit={this.onSumbitHandle.bind(this)}>
                <input id='stock-symbol'/>
                <button type='submit'>Fetch Data</button>
            </form>,
            <div>
                <p>Price : ${this.fetchedPrice}</p>
            </div>
        ]
    }

}