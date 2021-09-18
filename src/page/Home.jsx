import { Sidebar } from "../component/sidebar";
import { SideItem } from "../component/sideItem";
import { Form } from "../component/form";
import { Cards } from "../component/cards";
import { Navbar } from "../component/navbar";



export const Home = () => {
    return (
      <div className="row">
           <Sidebar />
        <div className="col-10 p-0 border-start">
            <Navbar />
            <div className="p-3">
                <h3 className="m-4">Welcome, Find a felxible flight for your next trip</h3>    
            </div>
            <Form />
            <Cards />
        </div>
     </div>
    );
  }; 
              