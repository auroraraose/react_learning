
import React, {useEffect, useContext} from 'react';
import { myContext } from './trial';


function Even() {
    const count = useContext(myContext);
    useEffect(() => {        
        
        // return () =>{
        //     console.log("odd");
        // }
    }, []);  

    return (
        <div>
        <p>The component is even with an even count! {count}</p>
        </div>
    );
}

export default Even;
