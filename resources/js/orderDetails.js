import axios from 'axios'
import moment from 'moment'

export function  initAllOrders() {
    const orderTableBody = document.querySelector('#AllordersTableBody')
    let AllOrders = document.querySelector('#AllOrders')
    let orders = AllOrders ? AllOrders.value : null
    orders = JSON.parse(orders)
    let markup
    // console.log(orders)

    axios.get('/allorder', {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(res => {
        orders = orders
        // console.log(orders)
        markup = generateMarkup(orders)
        orderTableBody.innerHTML = markup
    }).catch(err => {
        console.log(err)
    })

    function renderItems(items) {
        let parsedItems = Object.values(items)
        return parsedItems.map((menuItem) => {
            return `<p>${ menuItem.item.name } - ${ menuItem.qty } pcs </p>`
        }).join('')
      }

    function generateMarkup(orders) {
        return orders.map(order => {
            return `
                <tr>
                <td class="border px-4 py-2 text-green-900">
                    <p>${ order._id }</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${ order.customerId }</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${ order.phone }</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">${ order.address }</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                <span class="relative">
                ${ order.status }
                </span></span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    ${ order.paymentStatus ? 'Paid' : 'COD' }
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    ${ moment(order.createdAt).format("DD:MM:YY h:mm a") }
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="text-gray-900 whitespace-pre">${ renderItems(order.items) }</div>
                </td>
            </tr>
        `
        }).join('')
    }
}