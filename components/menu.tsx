import Container from "./container";

export default function Menu() {
    return (

       <Container>

<div id="main-content" className="flex justify-center">
    <div>
    <ul className="menu menu-horizontal rounded-box">
      <li>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>

    </ul>
    </div>
    
    
    
           <div className="">
               <div className="flex justify-center">
                   <ul className="menu menu-horizontal">
                     <li><a href="/palvelut">Palvelut</a></li>
                     <li><a href="/blogi">Blogi</a></li>
                     <li><a href="/tietoa">Tietoa</a></li>
                   </ul>
               </div>
           </div>
</div>
</Container>
    )
};