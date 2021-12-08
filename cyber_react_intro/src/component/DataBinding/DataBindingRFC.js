/**
 * Đối với functional, practice là với các biến ko tham gia vào binding nên đê ngoài function !
 * Cơ bản thì đặt ở vị trí nào cũng ok
 */

import React from 'react'

const job = 'jedi';

const character2 = {
    name: 'Yoda',
    charClass: 'teacher',
};

export default function DataBindingRFC() {
    const bindingStyle = 'functional'
    return (
        <div>
            <h1>Data Binding RFC - <span className='text-danger'>{bindingStyle}</span></h1>
            <h2>{character2.charClass} - {character2.name} is also a {job}</h2>
        </div>
    )
}
