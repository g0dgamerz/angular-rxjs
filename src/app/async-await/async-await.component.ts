import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent {

   dell ={
    brand:'Dell',
    hardDisk: '2 TB',
    color:'Black'
  }

  // let dell = {
  //   brand:'Dell',
  //   hardDisk: '2 TB',
  //   color: 'Black'
  // }

  // let buyLaptop = new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve(dell)
  //   }.3000)
  // })
 fetch1(){
  var result1 = document.getElementById('result1');
    result1?.innerHTML == 'fetching data';
console.log("working");
  // console.log("working");
  // result1.innerText="fetching data...";
 }

 async fetch2()
    {
      // var result2 = document.getElementById('result2');
      //   result2?.innerHTML == "Fetching data";
      //   let data = await buyLaptop;
      //   console.log(data);
      //   result2.innerText = JSON.stringify(res);
    }


    // let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(response =>response.json())
    fetch3()
    {
      //promise wala
        // result3.innterText = "fetching data...";
        // buyLaptop2.then(res=>{
        //   console.log(res);
        //   result3.innterText=JSON.stringify(res);
        // })

        //async / await
        // let res = await buyLaptop2;
        // result3.innterText = JSON.stringify(res);
    }
}
