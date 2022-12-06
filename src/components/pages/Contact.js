import React from 'react';
import emailCheck from '../../utils/helpers'
import '../../styles/Contact.css'

export default function Contact() {
    return (
        <div>

            <h1>Contact Andrew</h1>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
            </div>
        </div>
    )
}