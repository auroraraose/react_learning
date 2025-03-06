import React , {useRef} from 'react'; 

function Countter(){

    const myref = useRef(null);

    function increment(){
        console.log(myref);
        const btn= myref.current.children[2];
        console.log(btn);
        if (btn) {
            myref.current.style.backgroundColor = myref.current.style.backgroundColor === "rgb(240, 240, 240)" ? "" : "#f0f0f0";
        }
    }

    return (
        <div ref={myref} >
            <p>Hi useRef</p>
            <p>change Background</p>
            <button onClick={increment}>Button </button>
        </div>
    );
}

export default Countter;
