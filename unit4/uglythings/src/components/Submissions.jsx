import { useContext, useEffect } from "react";
import { FormContext } from "../context/contextProvider";
import EditDelete from "./EditDelete";


const Submissions = () => {

    
    const { getInitialThings } = useContext(FormContext)
    
    const { things } = useContext(FormContext);
    
    useEffect(() => {
        getInitialThings()
    },[])

    
    console.log(things)

    const thingElements = things.map((thing) => {
        return (
            <EditDelete {...thing} key={thing._id} />
        )
    })

    return (
        <div className="submissions">
                <h1>Things I Find Ugly</h1>
            {thingElements}
        </div>
    );
}

export default Submissions;