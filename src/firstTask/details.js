import {useState, useEffect} from "react";


function Details({info}) {
    const [person, setPerson] = useState({avatar: "avatar", name: "name", details: {city: "", company: "", position: ""}});


    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPerson(data);
        })
        .catch(() => {
            console.error("Can not download person card")
        });
    }, []);


    return (<>
            <div>
                <img src={person.avatar}></img> <br/>
                <span>{person.name}</span> <br/>
                <span>City: {person.details.city}</span> <br/>
                <span>Company: {person.details.company}</span> <br/>
                <span>Position: {person.details.position}</span> <br/>
            </div>
       
    </>);
}


export {Details};