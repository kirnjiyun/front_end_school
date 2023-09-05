 class VendingMachineFunc {
    constructor()
    {
        const vMachine = document.querySelector('.section1');
        this.balance =vMachine.querySelector(".bg-box p");
        this.itemList = vMachine.querySelector('.cola-list')
        this.inputCostEl = vMachine.querySelector('#input-money')
        this.btnPut = vMachine.querySelector('#input-money+.btn')
        this.btnReturn = vMachine.querySelector('#bg-box+.btn')
        this.btnGet = vMachine.querySelector('#btnget')
        this.stagedList = vMachine.querySelector('.get-list')
        //section2
        const myInfo = document.querySelector('section2');
        this.myMoney = myInfo.querySelector('.bg-box p');
        //section3
        const getInfo=document.querySelector('.section3')
        this.getList = getInfo.querySelector('get-list
}
}
export default VendingMachineFunc;