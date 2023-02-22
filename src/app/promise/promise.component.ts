import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  // myfunc()
  // {
  //   console.log("clickeed");
  // }
  constructor() { }

  DellAvailable() {
    return false;
    //  return setTimeout(()=>{
    //     return true
    //   },3000)
  }
  HpAvailable() {
    return false;
    //  return setTimeout(()=>{
    //     return false
    //   },3000)
  }
  promiseVal:any;
  dell={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'Black'
  }
  hp={
    brand:'HP',
    hardDisk:'1 TB',
    color:'Sliver'
  }
  notAvil={
    brand:'Not Available',
    status:'Failed'
  }
  ngOnInit(): void {
    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('Promise is resolved')
    // })
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved')
      // reject('promis is rejected');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          // resolve("Dell is purchased")
          resolve(this.dell);

        }, 3000)
      }
      else if (this.HpAvailable()) {
        return setTimeout(()=>{
          // resolve("Hp is purchased")
          resolve(this.hp);
        })
      }
      else {
        return setTimeout(()=>{
          // reject("Laptop is not available on store")
          reject(this.notAvil);
        },3000)
      }
    });
    buyLaptop.then(res => {
      console.log('then code =>', res);
      this.promiseVal=res;
    }).catch(res => {
      console.log('catch code=>', res)
      this.promiseVal=res;
    })
  }
}
