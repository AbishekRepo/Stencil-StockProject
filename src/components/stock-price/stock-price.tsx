import { Component, h, State } from "@stencil/core";

@Component({
    tag: 'ab-atock-price',
    styleUrl: './stock-price.css',
    shadow: true,
})

export class StockPrice {

    @State() fetchedPrice: number = 0;

    onSumbitHandle(event: Event){
        event.preventDefault();
        fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
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