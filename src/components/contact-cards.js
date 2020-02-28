import React from 'react';

export default function(props) {
    return (
        <div>
            <div>
                {props.firstName}
            </div>
            <div>
                {props.lastName}
            </div>
            <div>
                {props.phoneNumber}
            </div>
        </div>
    )
}