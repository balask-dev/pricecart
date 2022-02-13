import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
 let data =  [{a:"FREE",b:"$0",b1:"month",c:"Single user",d:"5GB Storage",e:"Unlimited Public Projects",f:"Community Access",g:"Unlimited Private Projects",h:"Dedicated Phone Support",i:"Free Subdomain",j:"Monthly Status Reports"},
              {a:"PLUS",b:"$9",b1:"month",c:"5 users",d:"50GB Storage",e:"Unlimited Public Projects",f:"Community Access",g:"Unlimited Private Projects",h:"Dedicated Phone Support",i:"Free Subdomain",j:"Monthly Status Reports"},
              {a:"Pro",b:"$49",b1:"month",c:"Unlimited Users",d:"150GB Storage",e:"Unlimited Public Projects",f:"Community Access",g:"Unlimited Private Projects",h:"Dedicated Phone Support",i:"Unlimited Free Subdomains",j:"Monthly Status Reports"}];



              //  const data2=[{a="PLUS",b="$9/month",c="5 users",d="50GB Storage",e= "Unlimited Public Projects",f="Community Access",g="Unlimited Private Projects",h="Dedicated Phone Support",i="Free Subdomain",j="Monthly Status Reports"}]
              // const data3=[{a="Pro",b="$49/month",c="Unlimited Users",d="150GB Storage",e="Unlimited Public Projects",f="Community Access",g="Unlimited Private Projects",h="Dedicated Phone Support",i="Unlimited Free Subdomains",j="Monthly Status Reports"}]
  return (
   
        <div class="pricing py-5">
          <div class="container">
            <div class="row">

                 {data.map((data)=>{
                    return <Card prod={data}/>
                  })}
             </div>
          </div>
      </div>
  );
}

function Card(props) {
  return (
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.prod.a}</h5>
        <h6 class="card-price text-center">{props.prod.b1}<span class="period">/{props.prod.b}</span></h6>
        <hr>
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.prod.c}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.prod.d}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.prod.e}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.prod.f}</li>
          <li class="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.prod.g}</li>
          <li class="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.prod.h}</li>
          <li class="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.prod.i}</li>
          <li class="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.prod.j}</li>
        </ul>
        </hr>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
       
      </div>
    </div>
  </div>
  );
}
