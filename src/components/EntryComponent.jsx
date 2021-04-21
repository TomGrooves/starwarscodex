import React, { useEffect, useState } from 'react'
import Accordion from './AccordionComponent'
import Style from '../assets/styles/entry.module.scss'

export function EntryComponent(props) {

    // States needed by component
    let [entryCategory, setEntryCategory] = useState("people")

    // useEffect hook to assign props to specific category
    useEffect(() => {
        function checkEntryCategory() {
            if (props.data.birth_year){
                setEntryCategory('people')
            }
        
            else if (props.data.climate){
                setEntryCategory('planets')
            }
        
            else if (props.data.episode_id){
                setEntryCategory('films')
            }
        
            else if(props.data.designation){
                setEntryCategory('species')
            }
        
            else if(props.data.vehicle_class){
                setEntryCategory('vehicles')
            }
        
            else if (props.data.starship_class){
                setEntryCategory('starships')
            }
        }

        checkEntryCategory()
    }, [props])

    // Create accordion for people category
    const people = 
        <Accordion title={props.data.name} child={
            <ul className={Style.people}>
                <li><p>Name: </p> {props.data.name}</li>
                <li><p>Gender: </p> {props.data.gender}</li>
                <li><p>Hair color: </p> {props.data.hair_color}</li>
                <li><p>Height: </p> {props.data.height} cm</li>
                <li><p>Weight: </p> {props.data.mass} kg</li>
                <li><p>Skin color: </p> {props.data.skin_color}</li>
            </ul>
            }>
        </Accordion>

    // Create accordion for planet category
    const planets = 
        <Accordion title={props.data.name} child={
            <ul className={Style.planets}>
                <li><p>Name: </p> {props.data.name}</li>
                <li><p>Climate: </p> {props.data.climate}</li>
                <li><p>Diameter: </p> {props.data.diameter} km</li>
                <li><p>Gravity: </p> {props.data.gravity}</li>
                <li><p>Orbital period: </p> {props.data.orbital_period} days</li>
                <li><p>Rotation period: </p> {props.data.rotation_period} days</li>
                <li><p>Population: </p> {props.data.population}</li>
                <li><p>Surface water: </p> {props.data.surface_water} m</li>
                <li><p>Terrain: </p> {props.data.terrain}</li>
            </ul>
            }>
        </Accordion>
    
    // Create accordion for films category
    const films =
        <Accordion title={props.data.title} child={
            <div className={Style.films}>
            <ul>
                <li><p>Title: </p> {props.data.title}</li>
                <li><p>Director: </p> {props.data.director}</li>
                <li><p>Producer: </p> {props.data.producer}</li>
                <li><p>Episode: </p> {props.data.episode_id}</li>
            </ul>
            <span><p>Opening: </p> {props.data.opening_crawl}</span>
            </div>
            }>
        </Accordion>

    // Create accordion for species category
    const species = 
        <Accordion title={props.data.name} child={
            <ul className={Style.species}>
                <li><p>Name: </p> {props.data.name}</li>
                <li><p>Height: </p> {props.data.average_height} cm</li>
                <li><p>Lifespan: </p> {props.data.average_lifespan} years</li>
                <li><p>Designation: </p> {props.data.designation}</li>
                <li><p>Language: </p> {props.data.language}</li>
                <li><p>Hair colors: </p> {props.data.hair_colors}</li>
                <li><p>Eye colors: </p> {props.data.eye_colors}</li>
                <li><p>Skin colors: </p> {props.data.skin_colors}</li>
            </ul>
            }>
        </Accordion>

    // Create accordion for vehicles category
    const vehicles = 
        <Accordion title={props.data.name} child={
            <ul className={Style.vehicles}>
                <li><p>Name: </p> {props.data.name}</li>
                <li><p>Model: </p> {props.data.model}</li>
                <li><p>Manufacturer: </p> {props.data.manufacturer}</li>
                <li><p>Crew: </p> {props.data.crew}</li>
                <li><p>Passengers: </p> {props.data.passengers}</li>
                <li><p>Capacity: </p> {props.data.cargo_capacity}</li>
                <li><p>Atmospheric speed: </p> {props.data.max_atmosphering_speed} kmH</li>
                <li><p>Class: </p> {props.data.vehicle_class}</li>
                <li><p>Consumables: </p> {props.data.consumables}</li>
                <li><p>Cost: </p> {props.data.cost_in_credits} credits</li>
            </ul>
            }>
        </Accordion>

    // Create accordion for starships category
    const starships = 
        <Accordion title={props.data.name} child={
            <ul className={Style.starships}>
                <li><p>Name: </p> {props.data.name}</li>
                <li><p>Model: </p> {props.data.model}</li>
                <li><p>Manufacturer: </p> {props.data.manufacturer}</li>
                <li><p>Length: </p> {props.data.length} m</li>
                <li><p>Crew: </p> {props.data.crew}</li>
                <li><p>Passengers: </p> {props.data.passengers}</li>
                <li><p>Atmospheric speed: </p> {props.data.max_atmosphering_speed} KmH</li>
                <li><p>Class: </p> {props.data.starship_class}</li>
                <li><p>Hyperdrive rating: </p> {props.data.hyperdrive_rating}</li>
                <li><p>Capacity: </p> {props.data.cargo_capacity}</li>
                <li><p>Consumables: </p> {props.data.consumables}</li>
                <li><p>Cost: </p> {props.data.cost_in_credits} credits</li>
            </ul>
        }>
        </Accordion>
       
        // Switch to determine which category to return
        switch (entryCategory) {    
            case "people":
                return people
            case "planets":
                return planets    
            case "films":
                return films
            case "species":
                return species
            case "vehicles":
                return vehicles     
            case "starships":
                return starships
            default: 
                return people
            }
}