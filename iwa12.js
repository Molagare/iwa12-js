const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}
//Edit below line
const status1 = document.querySelector("#book1 .status");
const reserve1 = document.querySelector("#book1 .reserve");
const checkout1 = document.querySelector("#book1 .checkout");
const checkin1 = document.querySelector("#book1 .checkin");

const status2 = document.querySelector("#book2 .status");
const reserve2 = document.querySelector("#book2 .reserve");
const checkout2 = document.querySelector("#book2 .checkout");
const checkin2 = document.querySelector("#book2 .checkin");

const status3 = document.querySelector("#book3 .status");
const reserve3 = document.querySelector("#book3 .reserve");
const checkout3 = document.querySelector("#book3 .checkout");
const checkin3 = document.querySelector("#book3 .checkin"); 

checkin1.style.color = "grey"
status1.style.color = STATUS_MAP.overdue.color
reserve1.disabled = STATUS_MAP.status.canReserver ? 'anabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.status.canCheckIn ? 'disabled' : 'enabled'

checkin2.style.color = "grey"
status2.style.color = STATUS_MAP.reserved.color
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'disabled' : 'enabled'
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin3.style.color = "grey"
status3.style.color = STATUS_MAP.shelf.color
reserve3 = STATUS_MAP.status.canReserver ? 'disabled' : 'enabled'
checkout3 = STATUS_MAP.status.canCheckout ? 'disabled' : 'enabled'
checkin= STATUS_MAP.status.canCheckIn ? 'enabled' : 'disaabled'