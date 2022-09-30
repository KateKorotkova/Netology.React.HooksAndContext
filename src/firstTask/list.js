import {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import {Details} from "./details";



function List() {
    const [persons, setPersons] = useState([]);
    const [selectedPersonId, setSelectedPersonId] = useState();
    const [selectedPersonName, setSelectedPersonName] = useState();


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPersons(data);
        });
    }, []);


    useEffect(() => {
        if (!selectedPersonId)
            return;
        const personCardContainer = document.getElementById("personCard");
        let info = {
            id: selectedPersonId,
            name: selectedPersonName
        };
        createRoot(personCardContainer).render(<Details info={info} />);
    }, [selectedPersonId]);


    const showDetails = (id, name) => {
        setSelectedPersonId(id);
        setSelectedPersonName(name);
    }


    return(
        <>
            {
                persons.map((x) => {
                   return <>
                            <div key={x.id} className="persons-list"> 
                                <a href="#" onClick={() => showDetails(x.id, x.name)}>{x.name}</a>
                            </div>
                        </>;
                })
            }
            <div id="personCard"></div>
        </>
    );
}


export {List};