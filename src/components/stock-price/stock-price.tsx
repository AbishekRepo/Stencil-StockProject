import { Component, h } from "@stencil/core";

@Component({
    tag: 'ab-atock-price',
    styleUrl: './stock-price.css',
    shadow: true,
})

export class StockPrice {

    onSumbitHandle(event: Event){
        event.preventDefault();
        console.log('Submitted');
    }

    render() {
        return [
            <form onSubmit={this.onSumbitHandle}>
                <input id='stock-symbol'/>
                <button type='submit'>Fetch Data</button>
            </form>,
            <div>
                <p>Price : {0}</p>
            </div>
        ]
    }

}