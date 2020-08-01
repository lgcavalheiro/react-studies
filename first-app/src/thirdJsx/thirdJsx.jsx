import React, { Component } from 'react'

export default class ThirdJsx extends Component {
    constructor(props) {
        super(props)

        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                skills: ['React', 'Vue', 'Typescript']
            },
            {
                id: 2,
                name: 'Larry Ernest',
                skills: ['Angular 2+', 'Typescript']
            },
            {
                id: 3,
                name: 'Mary Foster',
                skills: ['HTML', 'CSS']
            },
            {
                id: 4,
                name: 'Nathan Greene',
                skills: ['Python', 'Tensorflow', 'Keras']
            }
        ]
    }

    deleteClient = (e) => { 
        e.target.parentElement.parentElement.removeChild(e.target.parentElement) //massive  and ugly workaroud
    }

    renderSkills(skills, customerId) {
        let skillString = skills.map(skill => { return `${skill} ` })
        return (
            <span key={`skills-${customerId}`}>
                {skillString}
            </span>
        )
    }

    renderCustomers = (customer) => {
        return (
            <div key={`${customer.id}-${customer.name}`} id={`${customer.id}-${customer.name}`}> 
                <li>
                    {customer.name} - {this.renderSkills(customer.skills, customer.id)}
                    - <button onClick={e => this.deleteClient(e)}>Remove {customer.name}</button>
                </li> 
                
                
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3>Customer List:</h3>
                <ul>
                    {this.customers.map(this.renderCustomers)}
                </ul>
            </div>
        )
    }

}