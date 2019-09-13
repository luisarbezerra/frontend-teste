import fetch from 'isomorphic-fetch'

const baseUrl = 'https://storage.googleapis.com/dito-questions/events.json';

export const FETCHING_EVENTS    = 'FETCHING_EVENTS'
export const FETCHED_EVENTS     = 'FETCHED_EVENTS'
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR'

export function fetchingEvents() {
    return {
        type:    'FETCHING_EVENTS'
    }
}

export function fetchedEvents(events) {
    return {
        type:    'FETCHED_EVENTS',
        payload: events,
    }
}
  
export function fetchEventsError(error) {
    return {
        type:    'FETCH_EVENTS_ERROR',
        payload: error
    }
}

export function fetchEvents() {
    return async function (dispatch) {
        try {
            dispatch(fetchingEvents())
            const url = `${baseUrl}`;

            let response = await fetch(url)
            const json = await response.json();
            if (response.ok) {
                // Tratamento da resposta
                let new_json = {};

                parseJsonEvents(json.events, new_json);
                debugger
                dispatch(fetchedEvents(new_json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            dispatch(fetchEventsError(error));
        }
    }
}

function parseJsonEvents(json, new_json) {
    json.forEach((event) => {
        // Pegando o transaction_id, que será a chave do new_json
        let transaction_id = Object.entries(event.custom_data).find(elem => elem[1].key === 'transaction_id')[1].value
    
        // Criando um new_json com chaves de transaction_id's
        if (!new_json[transaction_id]) {
            new_json[transaction_id] = {
                timestamp:  null,
                products:   [],
                store_name: null,
                revenue:    null,

            };
        }

        // Populando o new_json com o json obtido
        if (event.event === 'comprou') {
            new_json[transaction_id].store_name = Object.entries(event.custom_data).find(elem => elem[1].key === 'store_name')[1].value;
            new_json[transaction_id].revenue    = event.revenue;
            new_json[transaction_id].timestamp  = event.timestamp;
        } else {
            new_json[transaction_id].products.push({
                'product_name': Object.entries(event.custom_data).find(elem => elem[1].key === 'product_name')[1].value,
                'product_price': Object.entries(event.custom_data).find(elem => elem[1].key === 'product_price')[1].value
            })
        }
    })
}